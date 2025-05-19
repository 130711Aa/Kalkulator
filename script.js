// Ambil elemen tampilan (display)
const display = document.getElementById('display');

// Ambil semua tombol di kalkulator
const buttons = document.querySelectorAll('button');

// Variabel buat nyimpan input atau ekspresi matematika
let expression = '';

// Loop ke semua tombol dan tambahkan event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        switch (value) {
            case 'C':
                expression = '';
                break;
            case '=':
                try {
                    // Ganti simbol sebelum evaluasi
                    const finalExpression = expression
                        .replace(/×/g, '*')
                        .replace(/÷/g, '/')
                        .replace(/,/g, '.')
                        .replace(/%/g, '/100');

                    // Evaluasi ekspresi matematika
                    expression = eval(finalExpression).toString();
                } catch (err) {
                    expression = 'Error';
                }
                break;

            case '+/-':
                // Tambah minus depan angka kalau belum ada
                if (expression !== '') {
                    if (expression.charAt(0) === '-') {
                        expression = expression.substring(1);
                    } else {
                        expression = '-' + expression;
                    }
                }
                break;

            default:
                expression += value;
                break;
        }

        // Tampilkan ekspresi di layar kalkulator
        display.innerText = expression;
    });
});
