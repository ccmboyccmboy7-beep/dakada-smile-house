// 1. Soo qabashada Target-yada
const form = document.querySelector("form");
const taxDisplay = document.querySelector("#tax"); 
const booshaye = document.querySelector("#booshaye");
const terminalTable = document.querySelector("#table");
const tableBody = document.querySelector("#table-body");
const shipCountDisplay = document.querySelector("h2 span");

let shipCount = 0;
let totalTax = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 2. Qabashada xogta ka timaada Form-ka
    const magacaVal = document.querySelector("#maga-markabka-input").value;
    const misankaVal = Number(document.querySelector("#misanka").value);
    const shidalkaVal = Number(document.querySelector("#shidalka").value);
    const nuucaVal = document.querySelector("#nuuca-alabta").value;

    // 3. Xisaabinta Canshuurta (Tusaale: $0.05 halkii KG)
    const canshuurtaMarkabka = misankaVal * 0.05;
    totalTax += canshuurtaMarkabka;
    shipCount++;

    // 4. Maaraynta Muuqaalka (UI)
    booshaye.classList.add("hidden");
    terminalTable.classList.remove("hidden");
    
    // Cusboonaysii Header-ka (Tax iyo Count)
    taxDisplay.innerText = totalTax.toFixed(2); 
    shipCountDisplay.innerText = `(${shipCount})`;

    // 5. Abuurista Safka Table-ka (Row)
    const row = document.createElement("tr");
    row.className = "hover:bg-[#374361]/40 transition-colors duration-200 group border-b border-[#3d465f]/10";
    
    row.innerHTML = `
        <td class="p-4 font-medium text-white italic">
            <i class="fa-solid fa-anchor mr-2 text-[#1d7be7]"></i>
            ${magacaVal}
        </td>
        <td class="p-4 text-center">
            <span class="bg-[#0d152c] px-3 py-1 rounded-full border border-[#3d465f]/50 text-xs text-[#6bbfe3]">
                ${misankaVal.toLocaleString()} KG
            </span>
        </td>
        <td class="p-4 text-center">
            <div class="flex flex-col items-center gap-1">
                <div class="w-full bg-gray-700 rounded-full h-1.5 max-w-[80px]">
                    <div class="h-1.5 rounded-full ${shidalkaVal < 20 ? 'bg-red-500' : 'bg-green-500'}" 
                         style="width: ${shidalkaVal}%"></div>
                </div>
                <span class="text-[10px] text-gray-400">${shidalkaVal}%</span>
            </div>
        </td>
        <td class="p-4 text-end">
            <span class="bg-[#1d7be7]/10 text-[#1d7be7] px-2 py-1 rounded text-[10px] font-bold uppercase">
                ${nuucaVal}
            </span>
        </td>
    `;

    tableBody.appendChild(row);

    // 6. Nadiifi Form-ka
    form.reset();
});