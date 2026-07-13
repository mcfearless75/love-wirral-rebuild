from reportlab.lib.pagesizes import A5
from reportlab.pdfgen import canvas

months = [
    ("2026-07", "July 2026"),
    ("2026-06", "June 2026"),
]

for slug, label in months:
    path = f"public/puzzle-solutions/{slug}.pdf"
    c = canvas.Canvas(path, pagesize=A5)
    width, height = A5
    c.setFont("Helvetica-Bold", 18)
    c.drawString(40, height - 60, "Love Wirral Magazine")
    c.setFont("Helvetica", 13)
    c.drawString(40, height - 90, f"Puzzle solutions — {label}")
    c.setFont("Helvetica-Oblique", 10)
    c.drawString(40, height - 130, "Sample placeholder file — replace with the real answer sheet.")
    c.drawString(40, height - 148, "Files in public/puzzle-solutions/ named YYYY-MM.pdf appear here automatically.")
    c.save()
    print(f"wrote {path}")
