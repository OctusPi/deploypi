import { expect, test } from 'vitest'
import Work from '../src/main/models/Work'

test('Check Table Name', () => {
    expect(Work.getTableName()).toBe('Works')
})

test('Check Attrs Model', () => {
    const attrs = ['id', 'name', 'host', 'username', 'password', 'privatekey', 'source', 'target', 'exclude', 'routines', 'createdAt', 'updatedAt']
    expect(Object.keys(Work.getAttributes())).toEqual(attrs)
})
