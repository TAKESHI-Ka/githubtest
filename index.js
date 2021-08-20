
const app = new Vue ({
    el:"#app",
    data: {
        message:"写真を撮影しました",
        seen: false
    },
    methods: {
        move() {
            const se = new Audio("Camera-Phone03-1.mp3")
            se.play()
            this.seen = true
            setTimeout(() => {
                this.message = "写真を送信中..."
            }, 800)
            setTimeout(() => {
                this.message = "IPアドレスを取得中..."
            }, 1200)
            setTimeout(() => {
                this.message = "IPアドレスから住所を特定中..."
            }, 2000)
            setTimeout(() => {
                this.message = "情報を送信中..."
            }, 2800)
            setTimeout(() => {
                location.href = "file:///C:/Users/HP/programing/income/invoise.html"
            }, 4000)
        }
    }
})