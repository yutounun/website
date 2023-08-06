## 工数管理アプリ ぷろマネ！

freee の工数管理機能が使えなくなることを受けて、有志で新規開発

## 利用技術

### 言語

TypeScript

### framework

- React
- Next.js 13

### その他

- Docker
- Zustand(ストアマネジメント)

## ローカルサーバーの起動

### Docker 利用(推奨)

※ root ディレクトリにいること
※ Docker アプリを起動していること → 忘れがち

```bash
# 初回のみ
docker-compose build
docker compose run
```

### Docker 不使用(非推奨)

```bash
git clone <本ページURL>
npm i
npm run dev
json-server --watch example.json --port 3001
```

[http://localhost:3000](http://localhost:3000)で確認
