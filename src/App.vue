<template>
<v-app>
    <v-app-bar app color="spore_4  " dark>
        <v-app-bar-nav-icon @click="drawer = true" class="spore_2--text"></v-app-bar-nav-icon>

        <v-toolbar-title class="spore_2--text">
            <h1>Sporatex</h1>
        </v-toolbar-title>

        <div class="d-flex align-center">

            <!--   <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->

        </div>

        <v-spacer></v-spacer>

        <!--<v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>-->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Sporatex
                </v-list-item-title>
                <v-list-item-subtitle>
                    biotextil sustentable
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>

    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        drawer: false,
        items: [{
                title: 'Cepa',
                icon: 'spoke'
            },
            {
                title: 'Photos',
                icon: 'mdi-image'
            },
            {
                title: 'About',
                icon: 'mdi-help-box'
            },
        ],
        right: null,
        //
    }),
};
</script>
