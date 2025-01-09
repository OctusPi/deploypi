import { expect, test } from 'vitest'
import History from '../src/main/models/History'

test('Check Table Name', () => {
    expect(History.getTableName()).toBe('Histories')
})

test('Check Attrs Model', () => {
    const attrs = ['id', 'project', 'work', 'log', 'status', 'createdAt', 'updatedAt']
    expect(Object.keys(History.getAttributes())).toEqual(attrs)
})
