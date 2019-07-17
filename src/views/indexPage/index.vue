<template>
    <div class="indexPage">
        <left-menu :isShow=showHide></left-menu>
        <div class="mainContent" :class={actmainContent:isShowMenu}>
            <header>
                <mu-icon :value="isShowMenu?':iconfont icon-menu':':iconfont icon-arrowleft'" left @touchstart='showHide'></mu-icon>
            </header>
            <div class="contentBox">
            <router-view></router-view>
            </div>
            <footer>
                <mu-container>
                    <mu-bottom-nav>
                        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
                        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
                        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
                    </mu-bottom-nav>
                </mu-container>
            </footer>
        </div>
    </div>
</template>
<script src="./index.js">
</script>
<style scoped="scoped" src="./index.less" lang="less"></style>