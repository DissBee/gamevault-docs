---
sidebar_position: 2.5
---

# Game Types

GameVault recognizes various **Game Types**, which affect how the application handles games, particularly during installation.

The Game Type is automatically detected, but users can manually override it using the correct type tag, based on [GameVault’s Naming Structure](structure.md). Each game can only have one type tag; if multiple tags are present, only one will be applied.

## Supported Game Types

:::info
Additional game types, such as ROMs and Android applications, may be added in the future.  
You can request more game types [here](https://github.com/Phalcode/gamevault-backend/issues/new).
:::

### Windows

#### Setup (W_S)

Windows Setup games require an installation process before play, initiated by setup-related files such as “setup.exe.”

- **Detection**: Identified through the type tag override or by specific setup-related executables in the archive.
- **File Patterns**:
  - `setup.exe`
  - `autorun.exe`
  - `setup_*.exe` (e.g., `setup_game.exe`)
  - `setup-*.exe` (e.g., `setup-game.exe`)
  - `install.exe`
  - `unarc.exe`
  - `.msi` files (excluding those with “redistributable”)

- **Example Files in Archive**:
  - `data.bin`
  - `data2.bin`
  - `setup.exe`

#### Portable (W_P)

Portable Windows games can be played immediately without requiring a setup.

- **Detection**: Recognized through the type tag override or by the presence of `.exe` and `.msi` files, lacking setup-specific filenames.
- **Example Files in Archive**:
  - `Butcher_Data/`
  - `Butcher.exe`

### Linux

#### Portable (L_P)

Linux Portable games can be played immediately without additional setup.

- **Detection**: Determined by the type tag override or by the presence of `.sh` files, with no `.exe` or `.msi` files.
- **Example Files in Archive**:
  - `Butcher_Data/`
  - `Butcher.sh`

### Undetected

This is the default type if GameVault cannot automatically detect the game type. Users will need to manually install the game in the installation folder.

- **Example File Structure**:
  - `data/`
  - `run.c64`
