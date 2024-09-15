const btn = document.querySelector("#btn");
btn.addEventListener("click", notification);

Notification.requestPermission().then(
	console.log
)

function notification() {
    new Notification("テスト", {
        body: "テストです"
    });
}