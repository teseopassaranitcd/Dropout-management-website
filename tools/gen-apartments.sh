#!/usr/bin/env bash
# Genera le pagine statiche per-appartamento ( /<slug>.html ) a partire da
# appartamento.html (il template). Ogni pagina è una copia con:
#   - window.__APT_ID impostato (niente ?id=N)
#   - <title> / <meta description> / canonical / og:* unici e baked nell'HTML
# Rilanciare dopo ogni modifica a appartamento.html:
#   bash tools/gen-apartments.sh
set -euo pipefail
cd "$(dirname "$0")/.."

TEMPLATE=appartamento.html
BASE_URL="https://collegedropoutmanagement.com"

OLD_TITLE='  <title>Camere e appartamenti in affitto per studenti a Rieti — The College Dropout</title>'
OLD_DESC='  <meta name="description" content="Foto, planimetria, prezzi e disponibilità di camere e appartamenti in affitto per studenti universitari a Rieti. The College Dropout: contatto diretto, senza agenzia."/>'

# id|slug|Nome
ROWS='
1|via-garibaldi-188|Via Garibaldi n.188
2|via-san-leopardo-1|Via San Leopardo n.1
3|via-garibaldi-33|Via G. Garibaldi n.33
4|via-delle-ortensie-8|Via delle Ortensie n.8
5|via-maderno-10|Via C. Maderno n.10
6|via-nuova-115-piano-1|Via Nuova n.115 - Piano I
7|via-nuova-115-piano-2|Via Nuova n.115 - Piano II
8|via-nuova-115-piano-3|Via Nuova n.115 - Piano III
9|via-porta-romana-22|Via Porta Romana n.22
10|via-boschi-29|Via P. Boschi n.29
11|largo-dacquisto-14|Largo S. D'\''Acquisto n.14
12|via-morroni-20|Viale T. Morroni n.20
13|via-ripresa-73|Via della Ripresa n.73
14|via-tigli-14|Via dei Tigli n.14
15|via-fratelli-cervi-2|Via fratelli Cervi n.2
16|via-san-bernardino-27|Vicolo San Bernardino n.27
17|via-garibaldi-89-secondo|Via G. Garibaldi n.89
18|via-garibaldi-89-secondo-rialzato|Via G. Garibaldi n.89 - Secondo rialzato
19|via-contigliano-12|Via Contigliano n.12
'

count=0
while IFS='|' read -r id slug name; do
  [ -z "${id:-}" ] && continue
  title="${name} — affitto per studenti a Rieti | The College Dropout"
  desc="${name}, Rieti. Camere e appartamento in affitto per studenti universitari: foto, planimetria, prezzi e disponibilità aggiornata. Contatto diretto con The College Dropout, senza agenzia."
  url="${BASE_URL}/${slug}"

  head_block="  <title>${title}</title>"
  head_block+="\n  <meta name=\"description\" content=\"${desc}\"/>"
  head_block+="\n  <link rel=\"canonical\" href=\"${url}\"/>"
  head_block+="\n  <meta property=\"og:url\" content=\"${url}\"/>"
  head_block+="\n  <meta property=\"og:title\" content=\"${title}\"/>"
  head_block+="\n  <meta property=\"og:description\" content=\"${desc}\"/>"
  head_block+="\n  <meta property=\"og:image\" content=\"${BASE_URL}/images/bear-logo.png\"/>"

  awk -v ot="$OLD_TITLE" -v od="$OLD_DESC" \
      -v hb="$head_block" \
      -v idjs="<script>window.__APT_ID=${id};</script>" '
    $0==ot { next }                                   # la vecchia <title> viene sostituita dal blocco
    $0==od { print hb; next }                         # inserisco titolo+meta al posto della description
    $0=="<script src=\"data.js\"></script>" { print idjs; print; next }
    { print }
  ' "$TEMPLATE" > "${slug}.html"

  count=$((count+1))
  echo "  ${slug}.html"
done <<< "$ROWS"

echo "Generate ${count} pagine."
