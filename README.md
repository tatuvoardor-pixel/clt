# 🌙 Calculadora CLT Noturna

Calculadora de salário para trabalhadores CLT em **turno noturno (18h→06h)**, com todos os cálculos da folha de pagamento brasileira 2026.

## ✨ Funcionalidades

- **Adicional noturno** com hora reduzida (CLT Art. 73 §1 — 52min30s = 1h)
- **Periculosidade 30%** (CLT Art. 193) integrada à base do noturno (OJ 259 TST)
- **Horas extras** 50% e 100% configuráveis
- **INSS 2026** — tabela progressiva
- **IRRF 2026** + isenção Lei 15.270/2025 (até R$ 5.000)
- **Escalas** 2×2, 12×36, 5×2, 6×1 ou personalizada
- **Calendário de pagamento** — fechamento dia 25, adiantamento dia 15 (40% do base), saldo dia 30
- **Custo real para a empresa** — FGTS, encargos patronais e provisões (informativo)
- **PWA** — instala no celular e funciona offline

## 🚀 Como subir no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `calculadora-clt-noturna`)
2. Suba **todos os arquivos desta pasta** para o repositório:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. No GitHub, vá em **Settings → Pages**
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
5. Clique em **Save**
6. Aguarde ~1 minuto — seu app estará no ar em:
   `https://SEU-USUARIO.github.io/calculadora-clt-noturna/`

## 📱 Instalar como app no celular

Abra o link no navegador do celular → menu → **"Adicionar à tela inicial"**.
O app funciona offline depois de aberto uma vez.

## ⚠️ Aviso

Os valores são **estimativas** baseadas na legislação CLT e nas tabelas 2026.
Cada empresa pode ter regras de convenção coletiva (CCT) diferentes.
Sempre confira com o DP/RH da sua empresa para valores exatos.

## 🛠️ Tecnologia

- React 18 (via CDN, sem build)
- Babel Standalone (compila JSX no navegador)
- Sem dependências de servidor — 100% estático

---

Feito para o trabalhador do turno da noite. 🌙
