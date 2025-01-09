import { expect, test } from 'vitest'
import Project from '../src/main/models/Project'

test('Check Table Name', () => {
    expect(Project.getTableName()).toBe('Projects')
})

test('Check Attrs Model', () => {
    const attrs = ['id', 'name', 'description', 'createdAt', 'updatedAt']
    expect(Object.keys(Project.getAttributes())).toEqual(attrs)
})
