import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { NgIf} from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    GalleryComponent,
    NgIf, 
  ] 
})
export class HomeComponent implements OnInit, AfterViewInit{
  showLetters: boolean = false;
  showArtwork: boolean = false;

  letters = [
    { id: 1, message: "Hi yeojin, moonlight is a very special song to me and it always comforts me at my lowest. I'm so proud of how far you've come and I cannot wait to see you shine brightly again in your new project. just like the moon up above I always feel reassured when I hear yeojins voice ♡ " },
    { id: 2, message: "여진아, 우리는 단 한 번만 대화할 수 있었지만, 당신이 세상에서 내가 가장 좋아하는 사람 중 한 명이라는 걸 알아줬으면 좋겠어요. 투어에서 당신을 두 번이나 만나려고 했지만, 안타깝게도 두 번 다 무슨 일이 생겼어요 😔 앞으로 드디어 직접 만날 수 있기를 바랍니다! 데뷔 때부터 팬이었고 앞으로도 영원히 당신 곁에 있을게요. 몇몇 팬들이 너무 침습적이고 무례해서 죄송해요. 당신이 겪는 어려움에 대해 많이 공감하고, 비록 우리가 실제로 대화할 수 없더라도 힘든 시간을 통해 서로를 응원할 수 있기를 바랍니다. 항상 당신 곁에 있을 거라는 걸 알아주세요 🤍 사랑하고 자랑스러워요!! -carly"},
    { id: 3, message: "hi yeojin! cloo and orbits love you so much! you are such a talented singer and dancer, and your smile lights up a stage or a room!! keep on shining how you want to and following your path, and orbits/ cloo will support you ♡ xoxo"},
    { id: 4, message: "my dear yeojin, i love you sosososo much ! i can’t wait to meet you this weekend 🧡 thank you for being my sunshine over the years! with all the love in the world, joey 🐻"},
    { id: 5, message: "Hiii Yeojin! Love you so so much! I can’t wait to see what you do next and I’ll always support you and your dream! Please stay happy and healthy! ❣️"},
    { id: 6, message: "ORBIT LOVES YOU TO THE MOON AND BACK!!!! 🧡🧡🧡 - LOVE FROM CANADA 🇨🇦🇨🇦🇨🇦"},
    { id: 7, message: "Hi Yeojin! I have cared for you since your debut and watched you grow up into the wonderful person you are today. We’re both the same age, so I feel lucky that I was able to grow up with you. I am so proud of everything you have done up until now. You are wonderful, strong, beautiful, and so brave. Thank you for being an idol and sharing your art with us and I hope to continue growing with you! I love you so much!"},
    { id: 8, message: "yeojin thank you for continuing and pushing forward as an idol after everything you’ve gone through it’s extremely admirable i’m ready to support you until the end i love you so much please keep your head held high! "},
    { id: 9, message: "Yeojin! You are so loved. I want you to know how much you’re loved and appreciated. You work so hard and everyone can see that. Your energy, talent, and bright personality bring so much happiness to so many people, including me. No matter what, you always give your best, and that’s something i really love about you. I hope you’re taking care of yourself and remembering that you don’t have to carry everything alone. So many people believe in you and are always cheering for you. You’re doing amazing, and I hope you always feel the love and support around you 🫶🏼🫶🏼 - Emily/Melly"},
    { id: 10, message: "Thank you for always trying your best whether you are feeling 10 or 100%. You have shown orbits what following their dreams looks like. Thank you for working so hard to make us the happiest fans in the world, and I will be by your side until the end. We love you <3."},
    { id: 11, message: "Hi Yeojin! I have been supporting you for 6 years now and I’m so proud of you!  I’ve even seen you in concert with loona and loossemble!  You are such a bright light to orbit and c.loo. I work at an animal hospital so seeing your love for animals especially your geckos have made me feel really close to you.  I am so happy to see you so confident and creative with your posts. It is so nice to see you expressing yourself however you want. I hope you always eat a good meal and don’t get sick. Never forget that you have so many people looking out for you. I can’t wait to see what you do next as an idol but know that no matter what - orbit and c.loo will be with you always!  <3"},
    { id: 12, message: "my dear yeojin, you are truly one of a kind <3 love you forever and always, thank you for being you! i will be cheering you on forever and always 🧡"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.showLetters) {
      this.initializeCommonNinja();
    }
  }

  toggleLetters(): void {
    this.showLetters = !this.showLetters;
    this.showArtwork = false;
    if (this.showLetters) {
      setTimeout(() => this.initializeCommonNinja(), 100);
    }
  }

  toggleArtwork(): void {
    this.showArtwork = !this.showArtwork;
    this.showLetters = false;
  }

  private initializeCommonNinja(): void {
    const scriptId = "commonninja-script";
    
    // Check if the script is already added
    let existingScript = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!existingScript) {
      // Inject the script
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
      script.defer = true;
      script.onload = () => {
        if (window['commonninjaFunctions']) {
          window['commonninjaFunctions'].forEach(fn => fn());
        }
      };
      document.body.appendChild(script);
    } else {

      // If script exists, force re-initialization
      if (window['commonninjaFunctions']) {
        window['commonninjaFunctions'].forEach(fn => fn());
      }
    }
  }
  
}
