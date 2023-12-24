<template>
    <v-footer class="bg-success d-flex align-start flex-column">
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="bg-success" elevation="0">
                        <v-card-title class="text-primary">
                            Customer Care
                        </v-card-title>
                          <v-btn
                                v-for="link in Links.CustomerCares"
                                :key="link"
                                :ripple="false"
                                color="dark"
                                size="sm"
                                variant="plain"
                                block
                                class="text-none my-2 ml-3 justify-start text-subtitle-2 text-start"
                            >
                                {{ link }}
                            </v-btn>
                    </v-card>
                    <v-card class="bg-success" elevation="0">
                        <v-card-title class="text-primary">
                            Earn With Daraz
                        </v-card-title>
                          <v-btn
                                v-for="link in Links.EarnwithDaraz"
                                :key="link"
                                :ripple="false"
                                color="dark"
                                variant="plain"
                                size="sm"
                                block
                                class="text-none ml-3 my-2 justify-start text-subtitle-2 text-start"
                            >
                                {{ link }}
                            </v-btn>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="bg-success" elevation="0">
                        <v-card-title class="text-primary ">
                            Earn With Daraz
                        </v-card-title>
                          <v-btn
                                v-for="link in Links.Daraz"
                                :key="link"
                                :ripple="false"
                                color="dark"
                                size="sm"
                                variant="plain"
                                density="compact"
                                block
                                class="text-none my-2 ml-3 justify-start text-subtitle-2 text-start"
                            >
                                {{ link }}
                            </v-btn>
                    </v-card>
                </v-col>
                <v-col>
                        <v-card class="bg-success" elevation="0">
                            <v-card-title class="text-primary ">
                                Daraz International
                            </v-card-title>
                            <v-btn
                                    v-for="link in Links.DarazInternational"
                                    :key="link.title"
                                    :ripple="false"
                                    color="dark"
                                    size="sm"
                                    variant="text"
                                    density="compact"
                                    :src="getLinks(link.src)"
                                    class="text-none my-2 ml-3 mr-3 justify-start text-subtitle-2 text-start"
                                >                                
                                <v-icon > <v-img :src="getLinks(link.src)" ></v-img></v-icon>
                                    {{ link.title }}
                                </v-btn>
                        </v-card>
                        <v-card class="bg-success mt-6" elevation="0">
                            <v-card-title class="text-primary ">
                                Payment Methods
                            </v-card-title>
                            <v-sheet class="d-flex justify-center align-start bg-transparent">
                                <v-img max-height="40" src="../../assets/payment/Bikash.png"></v-img>
                                 <v-img max-height="40" src="../../assets/payment/Nagad.png"></v-img>
                            </v-sheet>
                            <v-sheet class="d-flex justify-center align-start bg-transparent">
                                 <v-img max-height="40" src="../../assets/payment/Rocket.png"></v-img>
                                 <v-img max-height="40" src="../../assets/payment/Paypal.png"></v-img>
                            </v-sheet>
                            <v-sheet class="d-flex justify-center align-start bg-transparent">
                                 <v-img max-height="40" src="../../assets/payment/Visa.png"></v-img>
                                 <v-img max-height="30" src="../../assets/payment/Cash.png"></v-img>
                            </v-sheet>
                        </v-card>
                </v-col>
                <v-col>
                    <v-card class="bg-success" elevation="0">
                        <v-card-title class="text-primary ">
                            Exclusive Deals and Offers!
                        </v-card-title>
                        <v-row>
                            <v-col>
                                <v-img  style="cursor: pointer;" src="../../assets/QRode.png"></v-img>
                            </v-col>
                            <v-col>
                                <v-col style="cursor: pointer;"><v-img src="../../assets/Apple.png"></v-img></v-col>
                                <v-col><v-img style="cursor: pointer;" src="../../assets/Google.png"></v-img></v-col>
                            </v-col>
                        </v-row>
                        <v-row class="align-center">
                            <v-col>
                                <v-img style="cursor: pointer;" max-height="60" src="../../assets/BazarIcon.png"></v-img>
                            </v-col>
                            <v-col>
                                <v-sheet class="bg-success">
                                    <v-card-title class="text-primary">
                                        Happy Shopping
                                    </v-card-title>
                                    <v-card-subtitle>
                                        Download the App
                                    </v-card-subtitle>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-card class="bg-success pb-4 pl-4" elevation="0">
                                <v-card-title class="text-primary">
                                    Follow Us
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn icon="mdi-facebook" ></v-btn>
                                    <v-btn icon="mdi-instagram" ></v-btn>
                                    <v-btn icon="mdi-linkedin" ></v-btn>
                                    <v-btn icon="mdi-twitter" ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script lang="ts" setup>

import {reactive } from 'vue';
//images
import Bangladesh from '@/assets/Bangladesh.png';
import Nepal from '@/assets/Nepal.png';
import Pakistan from '@/assets/Pakistan.png';
import SriLanka from '@/assets/Sri-Lanka.png';
import Maldives from '@/assets/Maldives.png';

 const Links = reactive({
    CustomerCares: [
        'Help Center',
        'How to Buy',
        'Returns & Refunds',
        'Contact Us',
        'Terms & Conditions',
        'CCMS - Central Complain Management System',
    ],
    EarnwithDaraz:[
        'Daraz University',
        'Sell on Daraz',
        'Code of Conduct',
        'Join the Daraz Affiliate Program',
    ],
    Daraz:[
        'About Daraz',
        'Digital Payments',
        'Daraz Card',
        'Daraz Blog',
        'Daraz Cares',
        'Daraz Mart',
        'Privacy Policy',
        'Daraz App',
        'Daraz Exclusives',
        'Daraz Donates',
    ],
    DarazInternational:[
        {title:'Pakistan',src:Pakistan},
        {title:'Bangladesh',src:Bangladesh},
        {title:'Sri-Lanka',src:SriLanka},
        {title:'Maldives',src:Maldives},
        {title:'Nepal',src:Nepal},
    ],
 });
 function getLinks(src:string){
     return src;
 }
</script>

<style lang="scss" scoped>

</style>