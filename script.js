document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(display.value); // 주의: eval()은 보안 문제가 있으므로 실제로는 다른 방법 사용
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });
});
