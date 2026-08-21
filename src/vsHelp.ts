import {
	window,
	commands,
    Uri,
    env,
  } from 'vscode';
import { PickList } from './PickList';

const vsHelp = {
    /**
     * 情報メッセージを表示
     *
     * @param {string} content 表示内容
     * @returns {Thenable<string>}
     */
    showInfo(content: string): Thenable<string | undefined> {
        return window.showInformationMessage(content);
    },

    /**
     * 情報を表示し、再起動する
     *
     * @param {any} content 表示内容
     * @returns {Thenable<void>}
     */
    showInfoRestart(content: any): Thenable<void> {
        return window.showInformationMessage(content, { title: "再読み込み" })
            .then(function (item) {
                if (!item) { return; }
                commands.executeCommand('workbench.action.reloadWindow');
            });
    },

    showInfoWxChat(content: any): Thenable<void> {
        return window.showInformationMessage(content, { title: "OK" })
            .then(function (item) {
                if (!item) { return; }
                PickList.gotoFilePath('//resources//wx.jpg');
            });
    },

    showInfoSupport(content: any): Thenable<void> {
        return window.showInformationMessage(content, { modal: true }, { title: "❤️ 支援" }, { title: "詳細" }, { title: "グループに参加" })
            .then(function (item) {
                if (!item) { return; }
                if (item.title === '詳細') {
                    env.openExternal( Uri.parse( "https://vs.20988.xyz/d/66-ai-xin-juan-zeng/3" ) )
                }else if(item.title === 'グループに参加'){
                    PickList.gotoFilePath('//resources//wx.jpg');
                }else{
                    PickList.gotoFilePath('//resources//support.jpg');
                }

            });
    },

    showWebview(content: any): Thenable<void> {
        return window.showInformationMessage(content, { title: "OK" })
        .then(function (item) {
            if (!item) { return; }
            commands.executeCommand('workbench.view.extension.backgroundCover-explorer');
        });

    }
}

export default vsHelp;
