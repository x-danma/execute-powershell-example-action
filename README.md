# execute-powershell-example-action
An example github action to execute a powershell script contained in repo 

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `returnEcho`

the echoed string.

## Example usage

```yaml
uses: actions/execute-powershell-example-action@0.0.1
with:
  who-to-greet: 'Mona the Octocat'
```