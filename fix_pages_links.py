from pathlib import Path

base = Path('Pages')
changed = []
repls = [
    ('href="index.html"', 'href="../index.html"'),
    ("href='index.html'", "href='../index.html'"),
    ('src="Logo/', 'src="../Logo/'),
    ("src='Logo/", "src='../Logo/"),
    ('href="Logo/', 'href="../Logo/'),
    ("href='Logo/", "href='../Logo/"),
    ('href="terms-and-conditions.html"', 'href="terms and conditions.html"'),
    ("href='terms-and-conditions.html'", "href='terms and conditions.html'"),
]
for path in sorted(base.glob('*.html')):
    text = path.read_text(encoding='utf-8')
    original = text
    for old, new in repls:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
        changed.append(path.name)

print('UPDATED', len(changed), 'files')
for f in changed:
    print(f)
