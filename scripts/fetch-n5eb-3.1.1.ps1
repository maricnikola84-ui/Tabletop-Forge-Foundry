$ErrorActionPreference = 'Stop'

$Url = 'https://github.com/ImBenni/n5eb/releases/download/release-3.1.1/n5eb.zip'
$Out = Join-Path $PSScriptRoot 'n5eb-3.1.1.zip'
$Expected = '601159db6151963354bed55277b0bb8130f6d02fff768becc35559545b45a3a0'

Write-Host 'Downloading official N5EB 3.1.1 release...'
Invoke-WebRequest -Uri $Url -OutFile $Out

$Actual = (Get-FileHash -Algorithm SHA256 -Path $Out).Hash.ToLowerInvariant()
if ($Actual -ne $Expected) {
    Remove-Item $Out -ErrorAction SilentlyContinue
    throw "Checksum mismatch. Expected $Expected but got $Actual"
}

Write-Host "Verified N5EB 3.1.1: $Out"
