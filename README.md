# GitHub Pages公開方法

1. GitHubで `hinomarulabs-ctrl.github.io` リポジトリを作成します。
2. `index.html` と `app-ads.txt` をリポジトリ直下へ配置します。
3. `main` ブランチへpushします。
4. GitHubのリポジトリ画面で `Settings` > `Pages` を開きます。
5. `Build and deployment` の `Source` を `Deploy from a branch` にします。
6. `Branch` を `main`、フォルダを `/ (root)` に設定して保存します。
7. `https://hinomarulabs-ctrl.github.io/` にアクセスして公開を確認します。
8. サポートURLは `https://hinomarulabs-ctrl.github.io/support.html` です。
9. プライバシーポリシーURLは `https://hinomarulabs-ctrl.github.io/privacy.html` です。

# app-ads.txt確認方法

1. GitHub Pages公開後、`https://hinomarulabs-ctrl.github.io/app-ads.txt` を開きます。
2. 以下の1行のみが表示されることを確認します。

```text
google.com, pub-4474393505873527, DIRECT, f08c47fec0942fa0
```

# 将来 https://hinomaru-labs.com へ移行する手順

1. ドメイン管理サービスで `hinomaru-labs.com` のDNS設定を開きます。
2. GitHub Pages用のAレコード、または必要に応じて `www` のCNAMEレコードを設定します。
3. GitHubのリポジトリ画面で `Settings` > `Pages` を開きます。
4. `Custom domain` に `hinomaru-labs.com` を入力して保存します。
5. `Enforce HTTPS` を有効にします。
6. `https://hinomaru-labs.com/app-ads.txt` で同じ内容が表示されることを確認します。
7. `https://hinomaru-labs.com/support.html` と `https://hinomaru-labs.com/privacy.html` で同じ内容が表示されることを確認します。

# App Store Connect のマーケティングURLへ設定する手順

1. App Store Connectで対象アプリを開きます。
2. `App情報` または各ローカライズの情報入力画面を開きます。
3. `マーケティングURL` に `https://hinomarulabs-ctrl.github.io/` を入力します。
4. 将来独自ドメインへ移行した後は、`マーケティングURL` を `https://hinomaru-labs.com/` に変更します。
5. 保存して審査提出前にURLへアクセスできることを確認します。
