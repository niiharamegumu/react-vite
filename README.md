# react dashboard demo.
reactの習得がてらreactでのapp構築.
viteを使った開発.
素のreactを使用して作成する.

# Requirement
* node v16.13.1
* create react app
* --templete typescript

# Installation

npx 仕様時にキャッシュが溜まっている場合はクリア.
```bash
npx clear-npx-cache
```
react appの生成
```bash
npx create-react-app <app name> --template typescript
```

## Viteで構築の場合
[構築参考](https://zenn.dev/sprout2000/articles/98145cf2a807b1)
```
npm init vite
```
reactm>react-tsを選択後、npm install
```
npm install
```
vite.config.tsの中身とindex.htmlのパスの調整、build後のpublic dirの出力先設定を行う.

## Chakra UIのインストール
[参考](https://chakra-ui.com/docs/getting-started)


# Usage（normal）
開発サーバプログラムを用いて、プロジェクトを実行します。Webブラウザで動作確認できます。
```
npm run start
```
プロジェクトのビルドを行います。実際にWebサーバにアップロードするファイルを生成します。
```
npm run build
```
テストプログラムを実行し、アプリのテストを実行します。
```
npm run test
```
プロジェクトの依存関係をプロジェクト内に移動させ、完全に独立させた形で扱えるようにします。当分使用しません。
```
npm run eject
```


# Note

注意点など