# Find and replace strings

This action executes find-and-replace on a given string (hint: use `${{ github.ref }}` to get your branch name and apply this on it for use in another action). 

## Inputs

### `source`

**Required** The source string to apply this action to

### `find`

**Required** The text you want to search for within the branch name (eg. `ref/heads/`)

### `replace`

**Required** The text you want to replace (eg. `head-`, ``, `root_`)

## Outputs

### `value`

The new value containing the found-and-replaced string.

### Example usage

```yaml
uses: mad9000/actions-find-and-replace-string@3
with:
    source: ${{ github.ref }} # this translates to ref/heads/main on the main branch, but can be any arbitrary string 
    find: 'ref/heads/'        # we want to remove ref/heads/ from source 
    replace: ''               # and replace it with a blank string (ie. removing it)
```

This will output `main`.

Check out `.github/workflows/main.yml` for more examples

