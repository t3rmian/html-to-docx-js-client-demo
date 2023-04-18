import HTMLtoDOCX from "html-to-docx/dist/html-to-docx.umd"

const link = document.getElementById("html-to-docx");
HTMLtoDOCX(document.documentElement.outerHTML).then((blob) => {
    link.href = URL.createObjectURL(blob);
});
