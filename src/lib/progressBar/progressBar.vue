<template>
    <div class="progress-bar" ref="progressBar">
        <div class="progress-inner-box">
              <div class="progress" ref="progress" :style="{width:newWidth}"></div>
              <div 
              class="progress-btn-wrapper" 
              ref="progressBtn"
              @touchstart.prevent="touchstart"
              @touchmove.prevent="touchmove"
              @touchend="touchend"
              >
                  <div class="progress-btn"></div>
              </div>
        </div>
    </div>
</template>

<script>
const progressBtnWidth = 16
export default {
    data(){
        return{
            percent:.8,
            width:''
        }
    },
    computed:{
        newWidth(){
            return `${this.width}px`
        }
    },
    created(){
        this.touch = {}
    },
    mounted(){
        console.log(this.$refs.progressBar.clientWidth,333)
        this.progressWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        this.width = this.progressWidth * this.percent
        this.$refs.progressBtn.style.transform = `translate(${this.width}px)`
    },
    methods:{
        touchstart(e){
            this.touch.initiated = true
            this.touch.startX = e.touches[0].pageX
            this.touch.left = this.$refs.progress.clientWidth
        },
        touchmove(e){
            if (!this.touch.initiated) {
              return
            }
            const deltaX = e.touches[0].pageX - this.touch.startX
            const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
            this._offset(offsetWidth)
        },
        touchend(){
            this.touch.initiated = false
            this._triggerPercent()
        },
        _triggerPercent() {
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            console.log(percent,2222)
            this.$emit('percentChange', percent)
        },
        _offset(offsetWidth) {
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
        }
    }
}
</script>

<style lang="scss" scoped>
    .progress-bar{
        height: 30px;
        background: chocolate;
        .progress-inner-box{
            position: relative;
            top: 13px;
            left: 0;
            height: 4px;
            background: crimson;
            .progress{
                height: 4px;
                background: darkgreen;
            }
            .progress-btn-wrapper{
                position: absolute;
                top: -13px;
                left: -7px;
                width: 30px;
                height: 30px;
                background: blue;
                border-radius: 50%;
                .progress-btn{
                    position: relative;
                    width: 16px;
                    height: 16px;
                    top: 7px;
                    left: 7px;
                    background: cadetblue;
                    border: 3px solid #fff;
                    box-sizing: border-box;
                    border-radius: 50%;
                }
            }
        }
    }
</style>