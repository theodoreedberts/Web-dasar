let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let editingId = null;

const form = document.getElementById('contactForm');
const btnBatal = document.getElementById('btnBatal');
const modeText = document.getElementById('modeText');
const searchInput = document.getElementById('searchInput');

function simpan() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function genId() {
    if (contacts.length === 0) return 1;
    return Math.max(...contacts.map(c => c.id)) + 1;
}

form.addEventListener('submit', function simpanKontak(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const kategori = document.getElementById('kategori').value;

    if (editingId !== null) {
        const index = contacts.findIndex(c => c.id === editingId);
        if (index !== -1) {
            contacts[index] = { id: editingId, nama, telepon, email, kategori };
        }
        batalEdit();
    } else {
        contacts.push({
            id: genId(),
            nama,
            telepon,
            email,
            kategori
        });
        form.reset();
        document.getElementById('kategori').value = 'Teman';
    }

    simpan();
    render();
});

function editKontak(id) {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
        document.getElementById('nama').value = contact.nama;
        document.getElementById('telepon').value = contact.telepon;
        document.getElementById('email').value = contact.email;
        document.getElementById('kategori').value = contact.kategori;
        
        editingId = id;
        modeText.textContent = 'Mode: Edit';
        btnBatal.classList.remove('hidden');
    }
}

function hapusKontak(id) {
    if (confirm('Apakah Anda yakin ingin menghapus kontak ini?')) {
        contacts = contacts.filter(c => c.id !== id);
        simpan();
        render();
    }
}

function batalEdit() {
    editingId = null;
    form.reset();
    document.getElementById('kategori').value = 'Teman';
    btnBatal.classList.add('hidden');
    modeText.textContent = 'Mode: Tambah';
}

function render() {
    const query = searchInput.value.toLowerCase();
    
    const filtered = contacts.filter(c => 
        c.nama.toLowerCase().includes(query) ||
        c.telepon.toLowerCase().includes(query) ||
        c.email.toLowerCase().includes(query)
    );

    document.getElementById('counterText').textContent = `${filtered.length} dari ${contacts.length} kontak`;
    
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    filtered.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${c.nama}</td>
            <td>${c.telepon}</td>
            <td>${c.email}</td>
            <td>${c.kategori}</td>
            <td>
                <button class="btn btn-edit" onclick="editKontak(${c.id})">Edit</button>
                <button class="btn btn-hapus" onclick="hapusKontak(${c.id})">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

searchInput.addEventListener('input', render);

render();