import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const outputDir = `${path.dirname(fileURLToPath(import.meta.url))}/`;
const rows = JSON.parse(await fs.readFile(new URL('./missing-prompts.json', import.meta.url), 'utf8'));
const outputPath = `${outputDir}未插图词族图片提示词.xlsx`;

const workbook = Workbook.create();
const sheet = workbook.worksheets.add('待生成图片');
sheet.showGridLines = false;
sheet.freezePanes.freezeRows(1);

const values = [
  ['id', 'image_prompt_cn'],
  ...rows.map((row) => [row.id, row.image_prompt_cn]),
];
const lastRow = values.length;
const dataRange = sheet.getRange(`A1:B${lastRow}`);
dataRange.values = values;

const table = sheet.tables.add(`A1:B${lastRow}`, true, 'MissingImagePrompts');
table.style = 'TableStyleMedium2';
table.showFilterButton = true;
table.showBandedColumns = false;

const header = sheet.getRange('A1:B1');
header.format.fill = '#176B67';
header.format.font = { bold: true, color: '#FFFFFF', size: 12 };
header.format.rowHeightPx = 34;
header.format.verticalAlignment = 'center';

const body = sheet.getRange(`A2:B${lastRow}`);
body.format.font = { color: '#243238', size: 10 };
body.format.verticalAlignment = 'top';
body.format.wrapText = true;
body.format.rowHeightPx = 116;
body.format.borders = { preset: 'all', style: 'thin', color: '#D7E4E2' };

const idColumn = sheet.getRange(`A1:A${lastRow}`);
idColumn.format.columnWidthPx = 120;
sheet.getRange(`A2:A${lastRow}`).format.font = { bold: true, color: '#176B67', size: 11 };
sheet.getRange(`A2:A${lastRow}`).format.horizontalAlignment = 'center';

const promptColumn = sheet.getRange(`B1:B${lastRow}`);
promptColumn.format.columnWidthPx = 760;

const inspect = await workbook.inspect({
  kind: 'region,table',
  sheetId: '待生成图片',
  range: 'A1:B8',
  maxChars: 9000,
  tableMaxRows: 8,
  tableMaxCols: 2,
  tableMaxCellChars: 220,
});
await fs.writeFile(`${outputDir}inspect.txt`, inspect.ndjson ?? JSON.stringify(inspect, null, 2));

const errors = await workbook.inspect({
  kind: 'match',
  searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A',
  options: { useRegex: true, maxResults: 100 },
  maxChars: 4000,
});
await fs.writeFile(`${outputDir}formula-errors.txt`, errors.ndjson ?? JSON.stringify(errors, null, 2));

const preview = await workbook.render({
  sheetName: '待生成图片',
  range: 'A1:B7',
  scale: 1,
  format: 'png',
});
await fs.writeFile(`${outputDir}preview.png`, new Uint8Array(await preview.arrayBuffer()));

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
console.log(JSON.stringify({ outputPath, rowCount: rows.length }));
