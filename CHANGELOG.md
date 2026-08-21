<!--
 * @Description: 
 * @Author: czw
 * @Date: 2022-07-05 20:09:56
 * @FilePath: \vscode-background-cover\CHANGELOG.md
-->
## Changelog

#### ver 3.6.1 (2026/08/18)

    1. Fixed an issue in multi-window independent background mode where opacity / blur were still shared via global settings: now each window (workspace) can save and display different opacity and blur values, and the webview sliders, tree view, and settings panel all show the values currently active in the active window, without cross-contamination (in independent mode the values are no longer written back to the global settings.json; switching back to "Share across all windows" restores the global shared behavior).

#### ver 3.6.0 (2026/08/14)

    1. Added multi-window independent backgrounds; each window can display its own background image (can be switched back to sharing across all windows in advanced settings) ([#226](https://github.com/AShujiao/vscode-background-cover/pull/226) by @Aierlanta).
    2. Optimized the multi-window authorization experience; new windows no longer repeatedly pop up UAC authorization dialogs.
    3. Improved auto background switching fault tolerance; network failures silently retry or switch images, no longer interrupting with a dialog ([#225](https://github.com/AShujiao/vscode-background-cover/pull/225) by @Aierlanta).

    Thanks to @Aierlanta for the contribution!

#### ver 3.5.3 (2026/07/06)

    1. Fixed an issue where the background was not applied after a VS Code update and required manually closing and reopening to take effect (modern VS Code holds the core UI compile cache in the main process, which cannot be cleared by a soft reload, so the user is now guided to fully quit and restart).
    2. Fixed an issue where, under newer VS Code security policy (Trusted Types), the background / pets / particles did not show at all after patching (injection method was rebuilt to "stable bootstrap + external dynamic script").
    3. Added support for background display in the Cursor Agent Window (Glass window), reusing the additional bundle mechanism to automatically patch and restore on uninstall ([#214](https://github.com/AShujiao/vscode-background-cover/pull/214) by @Aierlanta).
    4. Optimized so that only switching the background image no longer rebuilds the decoration runtime, preserving pet positions and particle state.
    5. Moved the "Apply on restart" button in the decoration settings panel to the top and optimized the prompt text. 

#### ver 3.5.2 (2026/06/04)

    1. Fixed an issue where newer VS Code (e.g. 1.123.0) removed `util.isObject` due to a Node upgrade, causing the first initialization to report `Failed to write CSS file: TypeError: Node.util.isObject is not a function` (replaced the unmaintained `sudo-prompt` dependency with the officially maintained `@vscode/sudo-prompt`) ([#205](https://github.com/AShujiao/vscode-background-cover/issues/205)).

#### ver 3.5.1 (2026/05/25)

    1. Fixed an issue where automatic random background switching encountered large local images and showed a confirmation prompt, interrupting the slideshow; background auto-switching now applies directly, while manual selection of large images still keeps the confirmation prompt.
    2. Fixed an issue where the prompt text for reapplying the background after a VS Code update still displayed 3.0 version information.
    3. Fixed an issue where clicking confirm to reapply the background after a VS Code update did not correctly trigger a window reload.

#### ver 3.5.0 (2026/05/23)

    1. Added support for background injection in VS Code AgentView / Agent Sessions independent windows; installation and uninstallation synchronize processing of `vs/sessions/sessions.desktop.main.js` ([#197](https://github.com/AShujiao/vscode-background-cover/pull/197) by @MaxQian888)
    2. Added a Vue-driven Studio visual configuration panel, integrating Home, online gallery, local gallery, advanced settings, and decoration effect configuration.
    3. Added UI theme selection; in addition to the default theme, the Overwatch theme has been added, providing a game-HUD-like orange-blue high-contrast configuration experience.
    4. Added local gallery preview, recently used images, folder pagination, and drag-and-drop background setting for a more intuitive configuration entry.
    5. Added a URL input entry at the top of the online page; the local page focuses on local files, directories, and recently used management.
    6. Unified top pet configuration in Studio, expanded the pet list, and added resource preview.
    7. Added local Codex pet sync, automatically reading `pet.json` and `spritesheet.webp` from `~/.codex/pets` or `CODEX_HOME/pets`.
    8. Added custom speech bubble text for pets, supporting multi-line configuration; if not configured, preset text continues to be used.
    9. Optimized the background hot-update backend and online random image caching strategy, improving stability for quick switching and auto slideshow.
    10. Fixed an issue where the sponsor author button could not open on macOS.
    11. Optimized packaging configuration to exclude webview dev dependencies and source code, significantly reducing the VSIX package size.

    Thanks to @MaxQian888 for the contribution!

#### ver 0.1.0 (2018/10/17)
	First release

#### ver 1.0.0 (2018/11/08)
	Added random background switching feature

#### ver 1.1.0 (2019/01/04)
	Added uninstall hook

#### ver 1.1.1 (2019/03/16)
	Increased image transparency (for low-brightness images)
	
#### ver 1.5.1 (2019/03/28)
	1. Updated the uninstall hook implementation.
    2. Added detection and automatic conversion for image paths.
    3. Added a bottom status bar switch image feature (available when a random background image folder is configured).

#### ver 1.5.2 (2019/04/08)
	1. Temporarily removed image path detection.

#### ver 2.0.0 (2019/06/05)
	1. Rewrote features, added independent configuration, making it more convenient to use.
    2. No longer updates the background by monitoring settings.
    3. Removed the default background image.

#### ver 2.0.1 (2019/06/10)
	1. Added icons and text alignment to the dropdown list.
	
#### ver 2.1.0 (2019/06/14)
	1. Added random automatic background switching on each startup (please add a directory before enabling).

#### ver 2.2.0 (2019/06/20)
	1. Added shortcut ctrl + shift + F7 to randomly update the background and restart.
	
#### ver 2.2.1 (2019/07/18)
	1. Supports more image formats.

#### ver 2.2.2 (2019/08/15)
	1. Adapted CSS path for version 1.38.
	2. Optimized code.

#### ver 2.2.3 (2019/10/30)
	1. Aligned menu list text.
    2. Defined the extension type as "ui".

#### ver 2.2.4 (2020/07/28)
	1. Fixed an issue where the uninstall hook was not working.
    2. Changed the minimum supported version to 1.38.0.

#### ver 2.2.5 (2021/03/08)
	1. Converted local image files to base64 (fixed the issue where local files were not supported after version 1.54.1).
    2. Optimized image read failure messages.

#### ver 2.2.6 (2021/07/10)
	1. Changed the minimum image opacity value to 0.59.

#### ver 2.2.7 (2021/08/04)
	1. Set the default background to centered.

#### ver 2.2.8 (2022/01/24)
	1. On macOS, permissions can be obtained by entering a password.
	2. Dependency upgrades.

#### ver 2.2.9 (2022/03/26)

    1. Optimized the issue where directories did not support uppercase image formats.

#### ver 2.3.0 (2022/07/05)

    1. Added more menu items.

#### ver 2.3.2 (2023/03/07)

    1. Optimized the menu.

#### ver 2.3.3 (2023/06/05)

    1. Supports jfif format images.
	2. Adjusted the menu.
#### ver 2.3.4 (2023/08/18)

    1. Replaced the QR code image.

#### ver 2.3.5 (2023/09/20)

    1. Added background update exception prompts.
    2. First-time open group-join reminder popup.
#### ver 2.3.6 (2023/12/06)

    1. Replaced the QR code image.

#### ver 2.4.0 (2024/05/15)

    1. Supports setting image fill mode and image position.

#### ver 2.5.0 (2024/05/26)

    1. Supports quick online image background setting!!!  
	2. Integrated online community into the VS Code left sidebar, post images, set default page.  
	3. Community supports registration (email activation required).  
	4. Community supports replying to topics, uploading images, adding third-party images (for setting background image).  
	5. Community supports publishing personal themes (private gallery) (requires author approval).  
	6. Fixed auto-switching exception (2.5.1/2024.05.27)  

#### ver 2.5.2 (2024/06/24)

    1. Fixed the bug where images could not be displayed.

#### ver 2.5.3 (2024/06/30)

      1. Fixed the issue where local images were not displayed on Mac.

#### ver 2.5.4 (2024/08/22)

      1. Fixed the issue where local images could not be used on Linux.

#### ver 2.5.5 (2024/10/05)

      1. Fixed the abnormality caused by vsc1.94.0.

#### ver 2.6.2 (2024/11/12)

    1. The underlying implementation was changed from CSS to JS (fixed the issue where reload did not take effect).  
    2. Added background blur effect.  
    3. Automatically obtains file write permissions (no need to run as administrator).  
    4. Listens for theme changes and automatically triggers background adaptation reminders.  
    5. Added backup of source files for easy manual recovery in case of exceptions.  
    6. Partial code optimization.

#### ver 2.6.3 (2025/01/14)

    1. Added a guide prompt when obtaining permission backup files for the first time.  
    2. Fixed the issue where using ctrl + shift + F7 to randomly update the background was abnormal.


#### ver 2.6.5 (2025/03/05)

    1. Added reapply background reminder after VS Code update.  
    2. After setting the background from the online gallery, the post is associated as the default page.

#### ver 2.7.0 (2025/05/05)

  1.🎉 New feature: ~Mouse-following particle effects~ 🎉 (the original [vscode-nest](https://github.com/AShujiao/vscode-nest) extension has been deprecated and integrated into this extension).  
   2. Some configuration input boxes now display the current configured value.

#### ver 2.7.1 (2025/12/04)

  1. Added center mode to image fitting mode.

#### ver 2.8.0 (2025/12/14)

Thanks to [@WaaSakura](https://github.com/WaaSakura) for the [PR](https://github.com/AShujiao/vscode-background-cover/pull/173)

    1. Added support for the code-server platform.     
    2. Extended the image URL input feature:    
        * Supports JSON API addresses that return multiple images
        * Supports static HTML (parses `<a>` tag images)   
        * Supports online gallery websites (vs.20988.xyz parses images in posts) 
    3. Supports setting online gallery posts as a background gallery (triggered via the three-dot menu on post list and detail pages).

#### ver 2.8.1 (2025/12/19)

    1. Fixed the conflict between the "Reapply background" and "Auto-switch background" events after a VS Code update. 
    
#### ver 2.8.2 (2025/12/21)

    1. Code optimization and dependency updates.

#### ver 3.0.0 (2025/12/21)

    1. 🎉 Major update: supports background hot update; switching images takes effect immediately without restarting VSCode!
    2. ✨ Added a left sidebar visual configuration panel for more convenient operation.
    3. 🌐 Added multi-language support (internationalization).
    4. 🔄 Added timed auto slideshow for multiple images.
    5. 🛠 Underlying architecture refactoring and performance optimization.
    ⚠️ Note: This update involves underlying changes. First use requires reacquiring permissions (Hook) and restarting VSCode once to take effect. 

#### ver 3.1.0 (2025/12/25)

    1. 🎉 Supports video files as backgrounds.
    2. ✨ Added refresh function.
    3. 🌐 The left panel is now the default menu.
    ⚠️ Note: This update involves underlying changes. Reacquiring permissions (Hook) and restarting VSCode once is required to take effect.

#### ver 3.1.1 (2025/12/25)

    1. On the code-server platform, background image resources now support direct HTTPS loading, fixing `__BACKGROUND_COVER_BASE__` 404 and CSP errors.
    2. Added optimization for online random image API recognition: image addresses without file extensions are no longer cached and are treated as single images directly.
    3. Improved online gallery detection logic with more accurate console prompts.

#### ver 3.2.0 (2025/12/28)

    1. Added the ability to view cache files.
    2. Added a top navigation bar pet (pet mod from: https://github.com/tonybaloney/vscode-pets).
    3. The online random image download process has been fully upgraded: custom request headers, automatic following of 30x redirects, and writing cache files according to Content-Type, so `autoInterval` slideshow can directly use extensionless APIs.
    4. Optimized single-image recognition and fallback logic: no longer repeats fallback URLs, manual file selection and online paths share the same cache cleanup, and explicit single-image links automatically disable auto-update and prompt the reason.
    5. Background update success prompts are now only shown after the actual write succeeds; download failures throw errors directly, avoiding misleading users.

#### ver 3.2.2 (2025/12/29)

    1. Fixed Linux system exceptions.

#### ver 3.2.3 (2026/01/05)

    1. The top pet is now disabled by default.
    2. Added pet MODs (Pikachu, Dinosaur) and messages.

#### ver 3.2.5 (2026/04/13)

    1. Fixed the "Lock file is already being held" error when using remote random image APIs for auto-switching ([#193](https://github.com/AShujiao/vscode-background-cover/pull/193) by @Aierlanta).
    2. Optimized the auto slideshow task to prevent concurrent execution ([#193](https://github.com/AShujiao/vscode-background-cover/pull/193) by @Aierlanta).
    3. Fixed the issue in code-server mode where the browser cache for static resources caused the background not to update ([#194](https://github.com/AShujiao/vscode-background-cover/pull/194) by @WaaSakura).

    Thanks to @Aierlanta and @WaaSakura for their contributions!

#### ver 3.5.0 (2026/05/23)

1. Added support for background display in VS Code AgentView / Agent Sessions independent windows ([#197](https://github.com/AShujiao/vscode-background-cover/pull/197) by @MaxQian888).
2. Added a Vue-driven Studio visual configuration panel.
3. Added default / Overwatch UI theme switching.
4. Added local gallery preview, recently used, pagination browsing, and drag-and-drop background setting.
5. Added local Codex pet sync, supporting `~/.codex/pets` and `CODEX_HOME/pets`.
6. Added custom speech bubble text for pets, supporting multi-line configuration; uses preset text when left blank.
7. Added a URL input entry at the top of the online page; the local page focuses on local files and directory management.
8. Optimized background hot update, online random image caching, and quick-switch concurrency control.
9. Fixed the issue where the sponsor author button could not open on macOS.
10. Optimized VSIX packaging configuration, significantly reducing package size.


#### ver 3.5.1 (2026/05/25)

1. Fixed the issue where automatic random background switching encountered large local images and showed a confirmation prompt, interrupting the slideshow.
2. Fixed the issue where the prompt text for reapplying the background after a VS Code update still displayed 3.0 version information.
3. Fixed the issue where clicking confirm to reapply the background after a VS Code update did not correctly trigger a window reload.

#### ver 3.5.2 (2026/06/04)

1. Fixed the issue where newer VS Code (e.g. 1.123.0) removed `util.isObject` due to a Node upgrade, causing the first initialization to report `Failed to write CSS file: TypeError: Node.util.isObject is not a function` (replaced `sudo-prompt` with the officially maintained `@vscode/sudo-prompt`).
