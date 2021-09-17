const dayjs = require('dayjs')

const { generateDateRange, getTimeDiff } = require('../bin/tips');

test('generateDateRange: 2 day', () => {
  const today = dayjs('20211011', 'YYYYMMDD')
  const result = generateDateRange(today, 2, 'day').map(i => i.format('YYYYMMDD'))

  expect(result).toEqual(['20211011', '20211012']);
});

test('getTimeDiff: 3 day', () => {
  const start = dayjs('20210917', 'YYYYMMDD')
  const end = dayjs('20210920', 'YYYYMMDD')
  const diff = getTimeDiff(start, end, 'day')

  expect(diff).toBe(3)
})
