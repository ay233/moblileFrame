<template>
    <div class="indexPage">   
        <left-menu :isShow=showHide></left-menu>
        <div class="mainContent" :class={actmainContent:isShowMenu}>
            <header>
                <mu-icon :value="isShowMenu?':iconfont icon-menu':':iconfont icon-arrowleft'" left @touchstart='showHide'></mu-icon>
            </header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script src="./index.js">
</script>
<style scoped="scoped" src="./index.less" lang="less"></style>