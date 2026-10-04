/* ----- SAMPLE DATA ----- */
const SAMPLE_DATA = `1\tRice\t26089\t89.4°C\tNahuel\t11:28 - 14/06/2026
2\tPinto Beans\t11620\t87.4°C\tNahuel\t11:28 - 14/06/2026
3\tBlack Beans\t21700\t88.6°C\tNahuel\t11:29 - 14/06/2026
4\tChicken\tMdpk24ie\t95.4°C\tNahuel\t11:29 - 14/06/2026
5\tHot Honey Chicken.\tMdpk24ie\t93.7°C\tNahuel\t11:30 - 14/06/2026
6\tChilli\t32100\t87.7°C\tNahuel\t11:30 - 14/06/2026
7\tBirria Consomme\t22320\t86.6°C\tNahuel\t11:30 - 14/06/2026
8\tBeef\t20720\t89.6°C\tNahuel\t11:31 - 14/06/2026
9\tPork\t21430\t91.2°C\tNahuel\t11:31 - 14/06/2026
10\tChorizo\t2614210115\t88.2°C\tNahuel\t11:32 - 14/06/2026
11\tMock\t110626\t85.5°C\tNahuel\t11:32 - 14/06/2026
12\tQueso\t21610\t89.0°C\tNahuel\t11:32 - 14/06/2026
13\tVeggie Crunch\t-\t75°C\tNahuel\t11:33 - 14/06/2026
14\tChorizo Crunch\t-\t75°C\tNahuel\t11:33 - 14/06/2026
15\tRice\t-\t90.3°C\tNahuel\t14:27 - 14/06/2026
16\tPinto Beans\t-\t89.7°C\t-\t14:28 - 14/06/2026
17\tBlack Beans\t-\t88.8°C\tNahuel\t14:28 - 14/06/2026
18\tChicken\t-\t91.5°C\tNahuel\t14:28 - 14/06/2026
19\tHot Honey Chicken.\t-\t90.8°C\tNahuel\t14:29 - 14/06/2026
20\tChilli\t-\t91.1°C\tNahuel\t14:29 - 14/06/2026
21\tBirria Consomme\t-\t87.6°C\tNahuel\t14:29 - 14/06/2026
22\tBeef\t-\t93.1°C\tNahuel\t14:29 - 14/06/2026
23\tPork\t-\t93.3°C\tNahuel\t14:30 - 14/06/2026
24\tChorizo\t-\t89.9°C\tNahuel\t14:30 - 14/06/2026
25\tMock\t-\t87.2°C\tNahuel\t14:30 - 14/06/2026
26\tQueso\t-\t90.2°C\tNahuel\t14:31 - 14/06/2026
27\tVeggie Crunch\t-\t75°C\tNahuel\t14:31 - 14/06/2026
28\tChorizo Crunch\t-\t75°C\tNahuel\t14:31 - 14/06/2026
1\tRice\t26089\t91.9°C\tL\t16:24 - 14/06/2026
2\tPinto Beans\t11620\t91.9°C\tL\t16:24 - 14/06/2026
3\tBlack Beans\t21700\t90.7°C\tL\t16:25 - 14/06/2026
4\tChicken\tMFPK24IE\t90.6°C\tL\t16:25 - 14/06/2026
5\tHot Honey Chicken.\tMFPK24IE\t91.3°C\tL\t16:26 - 14/06/2026
6\tChilli\t32100\t92.1°C\tL\t16:27 - 14/06/2026
7\tBirria Consomme\t22320\t92.2°C\tL\t16:32 - 14/06/2026
8\tBeef\t20720\t92.8°C\tL\t16:32 - 14/06/2026
9\tPork\t21430\t92.1°C\tL\t16:33 - 14/06/2026
10\tChorizo\t2614210115\t90.9°C\tL\t16:34 - 14/06/2026
11\tMock\t110626\t90.5°C\tL\t16:34 - 14/06/2026
12\tQueso\t21610\t90.6°C\tL\t16:35 - 14/06/2026
13\tChorizo Crunch\t-\t75°C\tL\t16:35 - 14/06/2026
14\tVeggie Crunch\t-\t76°C\tL\t16:35 - 14/06/2026
15\tRice\t26089\t92.3°C\tL\t19:31 - 14/06/2026
16\tPinto Beans\t11620\t92.1°C\tL\t19:31 - 14/06/2026
17\tBlack Beans\t21700\t92.4°C\tL\t19:31 - 14/06/2026
18\tChicken\tMFPK24IE\t91.6°C\tL\t19:32 - 14/06/2026
19\tHot Honey Chicken.\tMFPK24IE\t90.5°C\tL\t19:32 - 14/06/2026
20\tChilli\t32100\t90.8°C\tL\t19:32 - 14/06/2026
21\tBirria Consomme\t22320\t91.2°C\tL\t19:32 - 14/06/2026
22\tBeef\t20720\t92.2°C\tL\t19:32 - 14/06/2026
23\tPork\t21430\t90.9°C\tL\t19:33 - 14/06/2026
24\tChorizo\t2614210115\t91.5°C\tL\t19:33 - 14/06/2026
25\tMock\t110626\t90.9°C\tL\t19:33 - 14/06/2026
26\tQueso\t21610\t91.5°C\tL\t19:33 - 14/06/2026
27\tChorizo Crunch\t-\t75°C\tL\t19:33 - 14/06/2026
28\tVeggie Crunch\t-\t76.4°C\tL\t19:34 - 14/06/2026`;

/* ----- BUTTON HANDLERS ----- */

function loadSample() {
    document.getElementById('recordInput').value = SAMPLE_DATA;
}

function clearAll() {
    document.getElementById('recordInput').value = '';
    document.getElementById('results').innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">🌯</span>
      <p>Paste your records above and hit <strong>Run check</strong></p>
    </div>`;
}

function runCheck() {
    const raw = document.getElementById('recordInput').value;
    const records = parseRecords(raw);

    if (records.length === 0) {
        document.getElementById('results').innerHTML = `
      <div class="error-card">
        No valid records found — make sure you paste tab-separated rows with at least 5 columns.
      </div>`;
        return;
    }

    const grouped = groupByFood(records);
    const analysed = analyseGroups(grouped);
    document.getElementById('results').innerHTML = buildHTML(analysed);
}

/* ----- PARSING ----- */

function parseRecords(raw) {
    const records = [];
    for (const line of raw.split('\n')) {
        const t = line.trim();
        if (!t || /^(#|row|food item|the temperature)/i.test(t)) continue;
        const cols = t.split('\t');
        if (cols.length < 6) continue;
        const item = cols[1].trim();
        const batch = cols[2].trim();
        const tempStr = cols[3].trim();
        const signed = cols[4].trim();
        const timeStr = cols.slice(5).join(' ').trim();
        if (!item) continue;
        const temp = parseTemp(tempStr);
        const time = parseTime(timeStr);
        if (!time) continue;
        records.push({ item, batch, temp, tempStr, signed, timeStr, time });
    }
    return records;
}

function parseTemp(str) {
    if (!str) return null;
    const m = str.replace('°', '').match(/([\d.]+)/);
    return m ? parseFloat(m[1]) : null;
}

function parseTime(str) {
    if (!str) return null;
    const m = str.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{2})\/(\d{2})\/(\d{4})/);
    if (!m) return null;
    return new Date(+m[5], +m[4] - 1, +m[3], +m[1], +m[2]);
}

/* ----- GROUPING ----- */

function groupByFood(records) {
    const grouped = {};
    for (const r of records) {
        const key = r.item.trim().toLowerCase().replace(/\.$/, '').replace(/\s+/g, ' ');
        if (!grouped[key]) grouped[key] = { displayName: r.item, entries: [] };
        grouped[key].entries.push(r);
    }
    for (const k of Object.keys(grouped)) {
        grouped[k].entries.sort((a, b) => a.time - b.time);
    }
    return grouped;
}

/* ----- ANALYSIS ----- */

function analyseGroups(grouped) {
    const THREE_HRS = 3 * 60 * 60 * 1000;
    return Object.keys(grouped).sort().map(key => {
        const { displayName, entries } = grouped[key];
        let hasTemp = false, hasGap = false, hasUnsigned = false;

        const annotated = entries.map((e, i) => {
            const minTemp = e.item.toLowerCase().includes('chicken') ? 85 : 75;
            const tempPass = e.temp !== null && e.temp >= minTemp;
            const gapMs = i > 0 ? e.time - entries[i - 1].time : null;
            const gapViol = gapMs !== null && gapMs > THREE_HRS;
            const isUnsigned = !e.signed || e.signed === '-';
            if (!tempPass) hasTemp = true;
            if (gapViol) hasGap = true;
            if (isUnsigned) hasUnsigned = true;
            return { ...e, tempPass, minTemp, gapMs, gapViol, isUnsigned };
        });

        return {
            key, displayName, entries: annotated,
            hasViolation: hasTemp || hasGap, hasTemp, hasGap, hasUnsigned
        };
    });
}

/* ----- FORMAT HELPERS ----- */

function formatGap(ms) {
    const m = Math.round(ms / 60000);
    const h = Math.floor(m / 60);
    return h === 0 ? `${m}m` : `${h}h ${m % 60}m`;
}

function pad(n) { return String(n).padStart(2, '0'); }

/* ----- BUILD HTML ----- */

function buildHTML(analysed) {
    const total = analysed.reduce((s, g) => s + g.entries.length, 0);
    const items = analysed.length;
    const tempV = analysed.reduce((s, g) => s + g.entries.filter(e => !e.tempPass).length, 0);
    const gapV = analysed.reduce((s, g) => s + g.entries.filter(e => e.gapViol).length, 0);
    const unsign = analysed.reduce((s, g) => s + g.entries.filter(e => e.isUnsigned).length, 0);
    const allPass = tempV === 0 && gapV === 0;

    let html = `
    <div class="metrics">
      <div class="metric">
        <div class="metric-label">Entries</div>
        <div class="metric-value c-ink">${total}</div>
      </div>
      <div class="metric">
        <div class="metric-label">Food items</div>
        <div class="metric-value c-ink">${items}</div>
      </div>
      <div class="metric">
        <div class="metric-label">Temp violations</div>
        <div class="metric-value ${tempV > 0 ? 'c-red' : 'c-green'}">${tempV}</div>
      </div>
      <div class="metric">
        <div class="metric-label">Gap violations</div>
        <div class="metric-value ${gapV > 0 ? 'c-red' : 'c-green'}">${gapV}</div>
      </div>
      <div class="metric">
        <div class="metric-label">Unsigned</div>
        <div class="metric-value ${unsign > 0 ? 'c-amber' : 'c-green'}">${unsign}</div>
      </div>
      <div class="metric ${allPass ? 'status-pass' : 'status-fail'}">
        <div class="metric-label">Status</div>
        <div class="metric-value ${allPass ? 'c-green' : 'c-red'}">${allPass ? 'PASS' : 'FAIL'}</div>
      </div>
    </div>

    <div class="section-eyebrow">Results by food item</div>
  `;

    for (const g of analysed) {
        const dotClass = g.hasViolation ? 'dot-bad' : 'dot-ok';
        const pillClass = g.hasViolation ? 'pill-bad' : 'pill-ok';
        const pillText = g.hasViolation ? 'VIOLATIONS' : 'COMPLIANT';

        html += `
      <div class="food-group ${g.hasViolation ? 'has-violation' : ''}">
        <div class="food-group-header" onclick="toggle(this)">
          <span class="dot ${dotClass}"></span>
          <span class="food-name">${g.displayName}</span>
          <span class="pill ${pillClass}">${pillText}</span>
          <span class="check-count">${g.entries.length} checks</span>
          <span class="chevron open">&#8964;</span>
        </div>
        <div class="food-entries">
          <div class="col-header">
            <span>Time</span><span>Item</span><span>Temp</span><span>Signer</span><span>Gap</span>
          </div>`;

        for (const e of g.entries) {
            const rowCls = (!e.tempPass || e.gapViol) ? 'row-violation' : '';
            const tmpCls = e.tempPass ? 'temp-pass' : 'temp-fail';
            const hhmm = `${pad(e.time.getHours())}:${pad(e.time.getMinutes())}`;

            let gapHTML;
            if (e.gapMs === null) gapHTML = `<span class="gap-first">first</span>`;
            else if (e.gapViol) gapHTML = `<span class="gap-violation">⚠ ${formatGap(e.gapMs)} — over limit</span>`;
            else gapHTML = `<span class="gap-ok">${formatGap(e.gapMs)}</span>`;

            const signerHTML = e.isUnsigned
                ? `${e.signed}<span class="unsigned-flag">⚠ UNSIGNED</span>`
                : e.signed;

            html += `
          <div class="entry-row ${rowCls}">
            <span class="entry-time">${hhmm}</span>
            <span class="entry-item">${e.item}</span>
            <span class="${tmpCls}" title="Min: ${e.minTemp}°C">${e.tempStr}</span>
            <span class="entry-signer">${signerHTML}</span>
            <span>${gapHTML}</span>
          </div>`;
        }

        html += `</div></div>`;
    }

    return html;
}

/* ----- TOGGLE ----- */

function toggle(header) {
    const entries = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    const open = chevron.classList.contains('open');
    entries.style.display = open ? 'none' : '';
    chevron.classList.toggle('open', !open);
}