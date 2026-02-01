import zipfile
import os

# Define partners data
partners = [
    {
        "filename": "01-uda.md",
        "shortname": "UDA",
        "fullname": "UNIVERSITA DEGLI STUDI DELL'AQUILA",
        "country": "Italy",
        "role": "Coordinator",
        "website": "https://www.univaq.it"
    },
    {
        "filename": "02-fbk.md",
        "shortname": "FBK",
        "fullname": "FONDAZIONE BRUNO KESSLER",
        "country": "Italy",
        "role": "Beneficiary",
        "website": "https://www.fbk.eu"
    },
    {
        "filename": "03-unipi.md",
        "shortname": "UNIPI",
        "fullname": "UNIVERSITA DI PISA",
        "country": "Italy",
        "role": "Beneficiary",
        "website": "https://www.unipi.it"
    },
    {
        "filename": "04-usal.md",
        "shortname": "USAL",
        "fullname": "UNIVERSIDAD DE SALAMANCA",
        "country": "Spain",
        "role": "Beneficiary",
        "website": "https://www.usal.es"
    },
    {
        "filename": "05-ureg.md",
        "shortname": "UREG",
        "fullname": "UNIVERSITAET REGENSBURG",
        "country": "Germany",
        "role": "Beneficiary",
        "website": "https://www.uni-regensburg.de"
    },
    {
        "filename": "06-mdu.md",
        "shortname": "MDU",
        "fullname": "MALARDALENS UNIVERSITET",
        "country": "Sweden",
        "role": "Beneficiary",
        "website": "https://www.mdu.se"
    },
    {
        "filename": "07-ruas.md",
        "shortname": "RUAS",
        "fullname": "STICHTING HOGESCHOOL ROTTERDAM",
        "country": "Netherlands",
        "role": "Beneficiary",
        "website": "https://www.rotterdamuas.com"
    },
    {
        "filename": "08-icg.md",
        "shortname": "ICG",
        "fullname": "IZOBRAZEVALNI CENTER GEOSS DOO",
        "country": "Slovenia",
        "role": "Beneficiary",
        "website": "https://www.ic-geoss.si"
    },
    {
        "filename": "09-hou.md",
        "shortname": "HOU",
        "fullname": "HELLENIC OPEN UNIVERSITY",
        "country": "Greece",
        "role": "Beneficiary",
        "website": "https://www.eap.gr"
    },
    {
        "filename": "10-edt.md",
        "shortname": "EDT",
        "fullname": "Edutech S.r.l.",
        "country": "Italy",
        "role": "Beneficiary",
        "website": "https://www.edutech.it"
    },
    {
        "filename": "11-ren.md",
        "shortname": "REN",
        "fullname": "UNIVERSITE DE RENNES",
        "country": "France",
        "role": "Beneficiary",
        "website": "https://www.univ-rennes.fr"
    },
    {
        "filename": "12-vub.md",
        "shortname": "VUB",
        "fullname": "VRIJE UNIVERSITEIT BRUSSEL",
        "country": "Belgium",
        "role": "Beneficiary",
        "website": "https://www.vub.be"
    },
    {
        "filename": "13-adecco.md",
        "shortname": "ADECCO",
        "fullname": "ADECCO ITALIA SPA",
        "country": "Italy",
        "role": "Beneficiary",
        "website": "https://www.adecco.it"
    },
    {
        "filename": "14-eitci.md",
        "shortname": "EITCI",
        "fullname": "European Information Technologies Certification Institute",
        "country": "Belgium",
        "role": "Beneficiary",
        "website": "https://eitci.org"
    },
    {
        "filename": "15-ie.md",
        "shortname": "IE",
        "fullname": "Informatics Europe",
        "country": "Switzerland",
        "role": "Associated Partner",
        "website": "https://www.informatics-europe.org"
    }
]

# Create directory
output_dir = "aim-pro-partners"
os.makedirs(output_dir, exist_ok=True)

# Generate markdown files
for p in partners:
    content = f"""---
shortname: "{p['shortname']}"
fullname: "{p['fullname']}"
country: "{p['country']}"
role: "{p['role']}"
logo: "/images/logos/{p['shortname'].lower()}.png"
website: "{p['website']}"
---
"""
    with open(os.path.join(output_dir, p['filename']), "w", encoding="utf-8") as f:
        f.write(content)

# Zip the directory
zip_filename = "aim-pro-partners.zip"
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(output_dir):
        for file in files:
            zipf.write(os.path.join(root, file), file)

print(f"Created {zip_filename}")