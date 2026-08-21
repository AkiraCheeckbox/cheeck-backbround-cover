
<h1 align="center">
    <img src="https://user-images.githubusercontent.com/14969576/61449520-b55d9900-a987-11e9-9dc9-e81fa416688c.png" alt="logo" width="180"><br>
    VS Code / Devin 背景カバー
</h1>

<p align="center">
    <b>好きな画像や動画を VS Code / Devin の背景全体に敷き詰めます。パーティクルアニメーション、ホットリロード、動画背景、自動切り替えなど、豊富な機能を搭載しています。</b><br>
    <a href="https://github.com/AkiraCheeckbox/cheeck-backbround-cover">
        <img src="https://img.shields.io/github/stars/AkiraCheeckbox/cheeck-backbround-cover.svg?style=social" alt="stars">
    </a>
</p>

> このリポジトリは <a href="https://github.com/AShujiao/vscode-background-cover">AShujiao/vscode-background-cover</a> を fork し、Devin デスクトップでの動作と日本語化、個人用の調整を行ったものです。

![Background Cover Studio preview](resources/readme-preview.jpg)


## 🚀 3.6.5 主な更新点

1. **🎨 透明度 / ぼかしをウィンドウごとに独立**：各ワークスペースで異なる透明度とぼかし値を保存・表示できます。あるウィンドウで調整しても、他のウィンドウの値は変わりません（webview スライダーとツリービューには、現在のウィンドウで実際に有効な値が表示されます）。
2. **🧹 設定がすっきり**：独立モードでは透明度 / ぼかしをグローバルな settings.json に書き戻さず、複数ウィンドウ間で値が混ざるのを防ぎます。「全ウィンドウで共有」に戻すと、再びグローバルな共有動作に戻ります。
3. **🇯🇵 日本語化**：パネル、通知、設定、README を日本語にしました。

---

## 🌟 機能一覧

- **Studio 設定パネル**：ホーム、ローカルギャラリー、オンラインギャラリー、詳細設定、装飾を一元管理。
- **UI テーマ**：デフォルトテーマとオーバーウォッチテーマをサポート。パネル右上で切り替え可能。
- **トップペット**：かわいいペットを複数内蔵。`~/.codex/pets` / `CODEX_HOME/pets` の Codex ペットとの同期にも対応し、吹き出しメッセージも自由に設定できます。
- **画像 / 動画背景**：ローカル画像、ネット画像、ローカル動画、オンライン動画に対応。
- **ホットリロード**：背景を切り替えても、VS Code: を再起動せずに即座に反映。
- **マルチウィンドウ独立背景**：各ウィンドウで異なる背景を表示することも、全ウィンドウで共有することも可能。
- **AgentView 対応**：VS Code: AgentView / Agent Sessions の独立ウィンドウにも背景を表示。
- **自動切り替え**：複数の画像 / 動画を指定した間隔で自動的に切り替え。
- **パーティクルアニメーション**：マウスに追随するパーティクルエフェクトを搭載。数、透明度、プリセットカラー、カスタムカラーが設定可能。
- **ローカルギャラリー**：フォルダ内画像のプレビュー、最近使用履歴、ページング、背景へのドラッグ設定に対応。
- **オンライン入口**：上部から URL を入力、オンラインギャラリーの更新、コミュニティギャラリーをブラウザで開く。
- **ビジュアル設定**：左側の Studio パネルからワンタッチで設定。
- **透明度 / ぼかし / サイズ調整**：背景の透明度、ぼかし、サイズ調整をカスタマイズ。マルチウィンドウモードではワークスペースごとに独立設定可能。
- **高度な解析**：JSON API、静的 HTML、ギャラリーの投稿など、さまざまな画像ソースをサポート。
- **オンラインギャラリー**：コミュニティ壁紙の閲覧、アップロード、ワンタッチ適用に対応。
- **クロスプラットフォーム**：Windows、macOS、Linux、Code-Server に対応。
- **自動権限処理**：Windows では書き込み権限を自動取得するため、手動操作が不要。


## ⚠️ 注意事項

> この拡張機能は VS Code: の内部ファイルを変更して効果を実現しています。

1. **初回使用 / 3.x へのアップグレード**：権限（Hook）を再取得し、VS Code: を一度再起動する必要があります。
2. **初回インストール / 更新**：「インストールが破損しています」という表示が出た場合は、【今後表示しない】をクリックしてください。
3. **背景の重ね表示 / 表示崩れ**：アップグレード後に背景が重なる場合は、VS Code: を再起動してください。
4. **復元方法**：VS Code: が開かなくなった場合は手動で復元してください：
   - パス：`Microsoft VS Code\resources\app\out\vs\workbench\`
   - `workbench.desktop.main.js.bak` を `workbench.desktop.main.js` にリネーム

![](https://user-images.githubusercontent.com/14969576/47090529-b1b0b080-d255-11e8-8812-d541cb1c3852.png)




## 🖼️ 効果サンプル

[オンラインギャラリー / その他の壁紙](https://vs.20988.xyz/d/24-vscodebei-jing-tu-tu-ku)

![](https://github.com/user-attachments/assets/7bd68f60-55af-42e8-980a-99bf1b3e078d)
![](https://github.com/user-attachments/assets/047617e6-7e09-441e-b9df-ae6a2bb940d9)
![](https://github.com/user-attachments/assets/3c0a214f-7563-43b9-9579-314647808ccf)


## ⚙️ 設定方法

> **推奨**：左側アクティビティバーの `backgroundCover` アイコンをクリックして、ビジュアル設定パネルを開きます。すべての設定が一目でわかります。

- **画像 / 動画ソース**：ローカルファイル、フォルダ、ネットワークリンクをサポート。
- **外観**：透明度、ぼかし、サイズ調整モードを変更。
- **オンライン**：URL を入力、オンラインギャラリーを閲覧、コミュニティギャラリーを更新。
- **装飾**：パーティクルエフェクト、トップペット、Codex ペット同期、ペットの吹き出しメッセージを設定。
- **詳細**：自動切り替え、ブレンドモード、キャッシュディレクトリを設定。

*コマンドパレット `Ctrl + Shift + P` -> `backgroundCover - 開始` からも設定を開けます。*


## 📝 ショートカットと使い方

- **背景切り替え**：下部ステータスバーのボタンをクリック
- **開く / 設定**：`Ctrl + Shift + P` -> `backgroundCover - 開始`
- **再適用**：VS Code: 更新後に背景が消えた場合は、設定から再適用してください

> **3.x へ初めてアップグレードする際は、権限を再取得して VS Code: を再起動する必要があります！**




## 🗑️ アンインストール手順

1. 拡張機能を無効化 / アンインストール
2. VS Code: を再起動
3. 拡張機能が自動で背景の残骸をクリーンアップします


## ❓ よくある質問

**Q: インストール後に反応がない？**
A: 管理者権限があるか確認してください（Windows の場合は VS Code: アイコンを右クリックして「管理者として実行」）。

**Q: Mac で権限を付与するには？**
A: 拡張機能が自動でパスワードを要求します。または手動で `sudo chown` してください。

---

## 📝 更新履歴

[完全なログ](https://github.com/AkiraCheeckbox/cheeck-backbround-cover/blob/master/CHANGELOG.md)

#### ver 3.6.5 (2026/08/21)

1. お気に入り背景プリセット（保存 / 適用 / 削除）を追加しました。
2. オンライン画像ランダム取得（Unsplash / Pexels / Picsum 対応）を追加しました。
3. 動画背景の音量・再生速度制御を追加しました。
4. 背景画像切り替えのクロスフェード効果を追加しました。
5. 背景上に時計オーバーレイを追加しました。
6. タグによる背景画像検索を追加しました。
7. Devin Agent ウィンドウ用の背景プリセットを追加しました。

#### ver 3.6.4 (2026/08/21)

1. リポジトリ・拡張機能名を `cheeck-backbround-cover` に変更しました。
2. 次のランダム背景へのホットキー `Ctrl+Shift+F8` を追加しました。
3. 設定のエクスポート / インポートコマンドを追加しました。
4. ライト / ダーク / ハイコントラストテーマに応じて背景を自動切り替える機能を追加しました。

#### ver 3.6.3 (2026/08/21)

1. 拡張機能全体の UI、通知、webview、コマンド、設定、README を日本語化しました。
2. Devin デスクトップでの動作を確認・調整しました。

#### ver 3.6.2 (2026/08/21)

1. 日本語 UI・通知・README に対応しました。
2. Devin デスクトップでの動作を確認・調整しました。

#### ver 3.6.1 (2026/08/18)

1. マルチウィンドウ独立背景モードで、透明度 / ぼかしがグローバル設定で共有されていた問題を修正。各ウィンドウ（ワークスペース）で異なる透明度とぼかし値を保存・表示できるようになりました（webview スライダー、ツリービュー、設定パネルには現在のウィンドウで実際に有効な値が表示されます）。

#### ver 3.6.0 (2026/08/14)

1. マルチウィンドウ独立背景を追加。各ウィンドウで異なる背景を表示可能（詳細設定で全ウィンドウ共有に切り替え可能）（[#226](https://github.com/AShujiao/vscode-background-cover/pull/226) by @Aierlanta）。
2. マルチウィンドウ権限体験を最適化。新規ウィンドウで UAC 権限ダイアログが繰り返し表示されないように。
3. 自動背景切り替えの耐障害性を向上。ネットワーク失敗時に静かに再試行または別画像に切り替え、ダイアログで中断しないように（[#225](https://github.com/AShujiao/vscode-background-cover/pull/225) by @Aierlanta）。
    @Aierlanta さん、ご協力ありがとうございます！

#### ver 3.5.3 (2026/07/06)

1. VS Code: 更新後に背景が反映されず、手動で閉じて開き直さないと有効にならなかった問題を修正（最新の VS Code: ではコア UI のコンパイルキャッシュをメインプロセスが保持しており、ソフト再読み込みではクリアできないため、完全な終了と再起動を案内します）。
2. 新しい VS Code: のセキュリティポリシー（Trusted Types）下で、パッチ適用後に背景 / ペット / パーティクルが一切表示されなくなっていた問題を修正（注入方式を「安定したブートストラップ + 外部動的スクリプト」に再構築）。
3. Cursor Agent Window（Glass ウィンドウ）の背景表示に対応。追加 bundle 機構を活用して自動的にパッチの適用とアンインストール時の復元を行うように（[#214](https://github.com/AShujiao/vscode-background-cover/pull/214) by @Aierlanta）。
4. 背景画像のみを切り替える際に装飾ランタイムを再構築しないように最適化。ペット位置とパーティクル状態が保持されます。
5. 装飾設定パネルの「再起動で反映」ボタンを上部に移動し、表示文案を最適化。

#### ver 3.5.2 (2026/06/04)

1. 新しい VS Code:（例: 1.123.0）で Node が `util.isObject` を削除したことにより、初回初期化時に `Failed to write CSS file: TypeError: Node.util.isObject is not a function` とエラーになっていた問題を修正（`sudo-prompt` を公式メンテナンスの `@vscode/sudo-prompt` に置き換え）。

#### ver 3.5.1 (2026/05/25)

1. 自動ランダム背景切り替えで大きなローカル画像に遭遇した際に確認ダイアログが表示され、切り替えが止まっていた問題を修正。
2. VS Code: 更新後の背景再適用時の表示文案に、3.0 バージョン情報が残っていた問題を修正。
3. VS Code: 更新後に「背景を再適用」をクリックしても、ウィンドウの再読み込みが正しくトリガーされなかった問題を修正。

---

### 謝辞

- [vscode-background](https://github.com/shalldie/vscode-background)
- [feature_restart_random_image](https://github.com/AShujiao/vscode-background-cover/pull/2)
- [Canvas-nest.js](https://github.com/hustcc/canvas-nest.js) ウェブパーティクル背景プラグイン

## コントリビューター

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

### 関連情報

- [GitHub](https://github.com/AShujiao/vscode-background-cover)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=manasxx.background-cover)

**作者を支援**
> この拡張機能が役立った場合は、作者にコーヒーをおごってあげてください。

[<img alt="lauset" src="https://zuhaowan-video.oss-cn-beijing.aliyuncs.com/1587571200/177327269-5cd91cdc-ffeb-4e1d-9193-abe5d2bb6b95.jpg" width="260">](https://github.com/lauset)

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で提供されています。
