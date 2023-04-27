# Pr title validator javascript action

This action prints "PR title" or "random"  to the log.

## Inputs

### `pr-title`

**Required** Pr title needs tobe passed. Default `"random"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/pr-validator@v1.1
```


1. ncc build index.ts --license licenses.txt
2. git add .
3. git commit -m "Use vercel/ncc"
4. git tag -a -m "My first action release" v1.1
5. git push --follow-tags

