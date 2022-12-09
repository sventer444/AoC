
function New-AdventFolders{
    param(
        [Parameter(Mandatory)]
        [string]
        $Year
    )


# Create answer folders
if (Test-Path "answers/$Year") {
   
    Write-Host "Folder Exists"
    # Perform Delete file from folder operation
}
else
{
  
    #PowerShell Create directory if not exists
    New-Item "answers/$Year" -ItemType Directory
    Write-Host "$Year answers created successfully"
    for($i = 1; $i -lt 26; $i++){ 
        $dayFolder = "answers/$Year/day$i"
        if (Test-Path $dayFolder){
            Write-Host "Folder Exists"
        }
        else{
            New-Item -Name $dayFolder -ItemType "directory"
            New-Item -Name "$dayFolder/part1" -ItemType "directory"
            New-Item -Name "$dayFolder/part2" -ItemType "directory"
        }
    }
}

# Create input folders
if (Test-Path "inputs/$Year") {
   
    Write-Host "Folder Exists"
    # Perform Delete file from folder operation
}
else
{
  
    #PowerShell Create directory if not exists
    New-Item $FolderName -ItemType Directory
    Write-Host "$Year inputs created successfully"
    for($i = 1; $i -lt 26; $i++){
        $dayFolder = "inputs/$Year/day$i" 
        if (Test-Path $dayFolder){
            Write-Host "Folder Exists"
        }
        else{
            New-Item -Name $dayFolder -ItemType "directory"
        }
    }
}

}

