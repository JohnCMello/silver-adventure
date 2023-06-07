# Contentful CLI - Migrations

## Generating Migrations

Generate a migration file for your content model or a specific content type

```
contentful space generate migration -s space_id -e master -f migrations/initial-migration.js
```

- [Official docs](https://github.com/contentful/contentful-cli/blob/master/docs/space/generate/migration/README.md)

## Migrating

This command parses and runs a migration script based on [Contentful's migration tooling](https://github.com/contentful/contentful-migration) on a Contentful space.

```
contentful space migration --space-id space_id migrations/initial-migration.js
```

- [Official docs](https://github.com/contentful/contentful-cli/blob/master/docs/space/migration/README.md)
