# ベースイメージとして Node.js の最新の LTS バージョンを使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# ポート 3000 を公開
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]