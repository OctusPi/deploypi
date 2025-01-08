import { expect, test } from 'vitest'
import History from '../electron/models/History'

test('Check Table Name', () => {
    expect(History.getTableName()).toBe('Histories')
})

test('Check Attrs Model', () => {
    const attrs = ['id', 'project', 'work', 'createdAt', 'updatedAt']
    expect(Object.keys(History.getAttributes())).toEqual(attrs)
})