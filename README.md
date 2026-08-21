
<h1 align="center">
    <img src="https://user-images.githubusercontent.com/14969576/61449520-b55d9900-a987-11e9-9dc9-e81fa416688c.png" alt="logo" width="180"><br>
    Cheeck Backbround Cover
</h1>

<p align="center">
    <b>Spread your favorite images and videos across the entire VS Code / Devin background. Features include particle animations, hot reload, video backgrounds, automatic switching, and more.</b><br>
    <a href="https://github.com/AkiraCheeckbox/cheeck-backbround-cover">
        <img src="https://img.shields.io/github/stars/AkiraCheeckbox/cheeck-backbround-cover.svg?style=social" alt="stars">
    </a>
</p>

> This repository is a fork of <a href="https://github.com/AShujiao/vscode-background-cover">AShujiao/vscode-background-cover</a>, adjusted for Devin desktop operation, Japanese localization, and personal tweaks.

![Background Cover Studio preview](resources/readme-preview.jpg)


## 🚀 3.6.5 Main Updates

1. **🎨 Per-window independent opacity / blur**: Each workspace can save and display different opacity and blur values. Adjusting in one window does not affect the other windows (the webview sliders and tree view show the values currently active in the active window).
2. **🧹 Cleaner settings**: In independent mode, opacity / blur are not written back to the global settings.json, preventing values from mixing across multiple windows. Switching back to "Share across all windows" restores global shared behavior.
3. **🇯🇵 Japanese localization**: Panel, notifications, settings, and README are now in Japanese.

---

## 🌟 Features

- **Studio settings panel**: Home, local gallery, online gallery, advanced settings, and decorations all in one place.
- **UI themes**: Supports the default theme and the Overwatch theme. Switch from the upper-right corner of the panel.
- **Top pet**: Multiple cute pets are built in. Also syncs with Codex pets in `~/.codex/pets` / `CODEX_HOME/pets`, and speech bubble messages can be freely customized.
- **Image / video backgrounds**: Supports local images, network images, local videos, and online videos.
- **Hot reload**: Switch the background instantly without restarting VS Code.
- **Multi-window independent backgrounds**: Display different backgrounds in each window, or share the same background across all windows.
- **AgentView support**: Display the background in independent VS Code AgentView / Agent Sessions windows.
- **Auto-switch**: Automatically switch between multiple images / videos at a specified interval.
- **Particle animation**: Mouse-following particle effects are included. Count, opacity, preset colors, and custom colors can be configured.
- **Local gallery**: Preview images in a folder, view recently used images, paginate, and drag to set as background.
- **Online portal**: Enter a URL from the top, update the online gallery, and open the community gallery in your browser.
- **Visual settings**: One-touch settings from the Studio panel on the left.
- **Opacity / blur / size adjustment**: Customize background opacity, blur, and size. In multi-window mode, each workspace can be configured independently.
- **Advanced parsing**: Supports a variety of image sources, including JSON APIs, static HTML, and gallery posts.
- **Online gallery**: Browse, upload, and apply community wallpapers with one touch.
- **Cross-platform**: Supports Windows, macOS, Linux, and Code-Server.
- **Auto permission handling**: Automatically acquires write permissions on Windows, so no manual operation is needed.


## ⚠️ Notes

> This extension modifies VS Code's internal files to achieve its effects.

1. **First use / upgrade to 3.x**: Reacquire permissions (Hook) and restart VS Code once.
2. **First install / update**: If the message "The installation is corrupt" appears, click **Don't show again**.
3. **Background overlap / display corruption**: If the background overlaps after an upgrade, restart VS Code.
4. **Recovery method**: If VS Code no longer opens, restore it manually:
   - Path: `Microsoft VS Code\resources\app\out\vs\workbench\`
   - Rename `workbench.desktop.main.js.bak` to `workbench.desktop.main.js`

![](https://user-images.githubusercontent.com/14969576/47090529-b1b0b080-d255-11e8-8812-d541cb1c3852.png)




## 🖼️ Effect Samples

[Online Gallery / Other Wallpapers](https://vs.20988.xyz/d/24-vscodebei-jing-tu-tu-ku)

![](https://github.com/user-attachments/assets/7bd68f60-55af-42e8-980a-99bf1e3e078d)
![](https://github.com/user-attachments/assets/047617e6-7e09-441e-b9df-ae6a2bb940d9)
![](https://github.com/user-attachments/assets/3c0a214f-7563-43b9-9579-314647808ccf)


## ⚙️ Setup

> **Recommended**: Click the `backgroundCover` icon in the left activity bar to open the visual settings panel. All settings are clear at a glance.

- **Image / video source**: Supports local files, folders, and network links.
- **Appearance**: Change opacity, blur, and size adjustment mode.
- **Online**: Enter a URL, browse the online gallery, and update the community gallery.
- **Decorations**: Configure particle effects, top pet, Codex pet sync, and pet speech bubble messages.
- **Advanced**: Set auto-switch, blend mode, and cache directory.

*You can also open settings from the Command Palette `Ctrl + Shift + P` -> `backgroundCover - Start`.*


## 📝 Shortcuts and Usage

- **Switch background**: Click the button in the bottom status bar
- **Open / Settings**: `Ctrl + Shift + P` -> `backgroundCover - Start`
- **Reapply**: If the background disappears after a VS Code update, reapply it from the settings

> **When you first upgrade to 3.x, you must reacquire permissions and restart VS Code!**




## 🗑️ Uninstall Steps

1. Disable / uninstall the extension
2. Restart VS Code
3. The extension automatically cleans up any remaining background artifacts


## ❓ FAQ

**Q: No response after installation?**
A: Check whether you have administrator privileges (on Windows, right-click the VS Code icon and select Run as administrator).

**Q: How do I grant permissions on Mac?**
A: The extension automatically asks for your password. Or run `sudo chown` manually.

---

## 📝 Changelog

[Full log](https://github.com/AkiraCheeckbox/cheeck-backbround-cover/blob/master/CHANGELOG.md)

#### ver 3.6.5 (2026/08/21)

1. Added favorite background presets (save / apply / delete).
2. Added random online image fetch (Unsplash / Pexels / Picsum support).
3. Added video background volume and playback speed controls.
4. Added crossfade effect for background image switching.
5. Added clock overlay on the background.
6. Added tag-based background image search.
7. Added background presets for Devin Agent windows.

#### ver 3.6.4 (2026/08/21)

1. Changed repository and extension name to `cheeck-backbround-cover`.
2. Added hotkey `Ctrl+Shift+F8` for the next random background.
3. Added export / import settings commands.
4. Added automatic background switching according to light / dark / high-contrast themes.

#### ver 3.6.3 (2026/08/21)

1. Japaneseized the entire extension UI, notifications, webview, commands, settings, and README.
2. Verified and adjusted operation on Devin desktop.

#### ver 3.6.2 (2026/08/21)

1. Added Japanese UI, notification, and README support.
2. Verified and adjusted operation on Devin desktop.

#### ver 3.6.1 (2026/08/18)

1. Fixed an issue where opacity / blur were still shared via global settings in multi-window independent background mode. Each window (workspace) can now save and display different opacity and blur values (the webview sliders, tree view, and settings panel show the values currently active in the active window).

#### ver 3.6.0 (2026/08/14)

1. Added multi-window independent backgrounds. Each window can display a different background (can be switched back to shared across all windows in advanced settings) ([#226](https://github.com/AShujiao/vscode-background-cover/pull/226) by @Aierlanta).
2. Optimized multi-window permission experience. UAC permission dialogs no longer appear repeatedly for new windows.
3. Improved auto background switching fault tolerance. On network failure, it silently retries or switches to another image without interrupting with a dialog ([#225](https://github.com/AShujiao/vscode-background-cover/pull/225) by @Aierlanta).
    Thank you @Aierlanta for your help!

#### ver 3.5.3 (2026/07/06)

1. Fixed an issue where the background was not applied after a VS Code update and required manually closing and reopening to take effect (in the latest VS Code, the main process holds the core UI compile cache, which cannot be cleared by a soft reload, so the user is now guided to fully quit and restart).
2. Fixed an issue where, under newer VS Code security policy (Trusted Types), the background / pets / particles were not displayed at all after applying the patch (injection method was rebuilt to a "stable bootstrap + external dynamic script").
3. Added support for background display in the Cursor Agent Window (Glass window). Reuses the additional bundle mechanism to automatically apply the patch and restore on uninstall ([#214](https://github.com/AShujiao/vscode-background-cover/pull/214) by @Aierlanta).
4. Optimized so the decoration runtime is not rebuilt when only the background image is switched, preserving pet positions and particle state.
5. Moved the "Apply on restart" button in the decoration settings panel to the top and optimized the prompt text.

#### ver 3.5.2 (2026/06/04)

1. Fixed an issue where, in newer VS Code (e.g. 1.123.0), `util.isObject` was removed by Node, causing the error `Failed to write CSS file: TypeError: Node.util.isObject is not a function` on first initialization (replaced the unmaintained `sudo-prompt` with the officially maintained `@vscode/sudo-prompt`).

#### ver 3.5.1 (2026/05/25)

1. Fixed an issue where automatic random background switching encountered large local images and showed a confirmation dialog, stopping switching.
2. Fixed an issue where the prompt text when reapplying the background after a VS Code update still displayed 3.0 version information.
3. Fixed an issue where clicking "Reapply background" after a VS Code update did not correctly trigger a window reload.

---

### Acknowledgments

- [vscode-background](https://github.com/shalldie/vscode-background)
- [feature_restart_random_image](https://github.com/AShujiao/vscode-background-cover/pull/2)
- [Canvas-nest.js](https://github.com/hustcc/canvas-nest.js) web particle background plugin

## Contributors

[<img alt="AShujiao" src="https://avatars2.githubusercontent.com/u/14969576?s=460&v=4" width="90">](https://github.com/AShujiao)
[<img alt="yjhmelody" src="https://avatars0.githubusercontent.com/u/16250688?s=460&v=4" width="90">](https://github.com/yjhmelody)
[<img alt="shalldie" src="https://avatars3.githubusercontent.com/u/9987486?s=460&v=4" width="90">](https://github.com/shalldie)
[<img alt="HOT3" src="https://avatars0.githubusercontent.com/u/43977240?s=400&v=4" width="90">](https://github.com/hot3)
[<img alt="rogeraabbccdd" src="https://avatars0.githubusercontent.com/u/15815422?s=460&v=4" width="90">](https://github.com/rogeraabbccdd)
[<img alt="kuresaru" src="https://avatars.githubusercontent.com/u/31172177?s=460&u=f44be019cc56fdf6d2ae9bbc7e12addb064c0b1b&v=4" width="90">](https://github.com/kuresaru)
[<img alt="lauset" src="https://avatars.githubusercontent.com/u/47267800?v=4" width="90">](https://github.com/lauset)
[<img alt="wuqirui" src="https://avatars.githubusercontent.com/u/53338059?v=4" width="90">](https://github.com/hhdqirui)
[<img alt="WaaSakura" src="https://avatars.githubusercontent.com/u/54162467?v=4" width="90">](https://github.com/WaaSakura)
[<img alt="Aierlanta" src="https://avatars.githubusercontent.com/u/90670661?v=4" width="90">](https://github.com/Aierlanta)
[<img alt="MaxQian888" src="https://github.com/MaxQian888.png?size=90" width="90">](https://github.com/MaxQian888)

### Related Information

- [GitHub](https://github.com/AShujiao/vscode-background-cover)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=manasxx.background-cover)

**Support the author**
> If this extension is useful, please treat the author to a coffee.

[<img alt="lauset" src="https://zuhaowan-video.oss-cn-beijing.aliyuncs.com/1587571200/177327269-5cd91cdc-ffeb-4e1d-9193-abe5d2bb6b95.jpg" width="260">](https://github.com/lauset)

## 📄 License

This project is released under the [MIT License](LICENSE).
