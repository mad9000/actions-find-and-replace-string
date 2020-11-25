# Find-and-replace on branch names

This action executes find-and-replace on your branch name. 

## Inputs

### `find`

**Required** The text you want to search for within the branch name (eg. `ref/head/`)

### `replace`

**Required** The text you want to replace (eg. `head-`, ``, `root_`)

## Outputs

### `value`

The new value containing the found-and-replaced string.

### Example usage

```yaml
uses: mad9000/actions-find-and-replace-branch-name@v1
with:
    find: 'ref/head/'
    replace: ''
```

