import imgImage from "figma:asset/4e691e74c89f953012158e2bd3b6a2eab78f60ec.png";
import imgImage1 from "figma:asset/4181cebb6641479de971c870877fc3417febe020.png";
import imgImage2 from "figma:asset/d734139a983d1933531f22252959336d64ff7dd2.png";
import imgBackground from "figma:asset/0a995aa83e1d867153c91e10766dca50b4ef7e17.png";
import imgImage3 from "figma:asset/ed09983d6708884584eb87e73f3795be6bb65241.png";
import imgGroups from "figma:asset/12b1c27b036bc454c3656386a3f7fb1e57ba4653.png";
import imgImage4 from "figma:asset/11759d8a6b8926daf531afb68edaa54a3cd3f4e0.png";
import imgImage5 from "figma:asset/52f2f56646b0e8bd640d3e6f04e7f652d7d05b02.png";
import imgImage6 from "figma:asset/fde8747abcd98fa1ce0dae2246f569afb2bd3c31.png";
import imgImage7 from "figma:asset/975f392309c4f0adc7c7e484dbcde2a45ca4b88f.png";
import imgImage8 from "figma:asset/e63bd4c59aaa9ab73931d00d138f681b4c68de23.png";
import imgImage9 from "figma:asset/46b8f40d036d8fbb9148b71bc8215012a0e47ea9.png";
import imgImage10 from "figma:asset/f9ee45d2f5b34a47d92d6612020014b307bd0cb0.png";
import imgImage11 from "figma:asset/10ca4ea04a6875b3792251ba2233ddeff33b5994.png";
import imgImage12 from "figma:asset/02743a65371bed10544328b5b23a0562a6ce8d85.png";
import imgImage13 from "figma:asset/fa896cf433cdaa8db6b9a0759c2acbea76bbdd78.png";
import imgImage14 from "figma:asset/49894dc41a3cd9d108a65779cf86833498a64a85.png";
import imgImage15 from "figma:asset/b50094203ab4b5a65be64b5dbdf123eb730999ab.png";
import imgImage16 from "figma:asset/bbb6febc9b90cfc037d7d7a6f960e158e12d3b3b.png";
import imgImage17 from "figma:asset/09c7190223df9360ea197a2e797e4a4ef954e953.png";
import imgImage18 from "figma:asset/9cdc8075b424dbace8be5f912488916260d52ddb.png";

function Groups() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[452.28px] h-[131.724px] right-[80.46px] w-[563.236px]"
      data-name="Groups"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[74.3px] h-[33.093px] right-[368.57px] rounded-[12.653px] w-[36.338px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[-14.28px] h-[146px] right-[424.37px] w-[136.916px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[10.06px] h-[28.551px] right-[9.73px] w-[202.453px]"
      data-name="Button"
    >
      <div
        className="absolute bg-[#252525] bottom-[0.97px] h-[26.604px] right-[0.97px] rounded-[8.436px] w-[199.533px]"
        data-name="Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#3e3e3e] border-[0.649px] border-solid inset-0 pointer-events-none rounded-[8.436px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[9.73px] h-[7.138px] right-[14.28px] w-[8.436px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage2}')` }}
      />
      <div className="absolute bottom-[13.3px] flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[11.68px] justify-center leading-[0] not-italic right-[81.11px] text-[#bbbbbb] text-[9.052px] translate-x-[100%] translate-y-[50%] w-[51.587px]">
        <p className="block leading-[normal]">Press enter</p>
      </div>
      <div className="absolute bottom-[14.28px] flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[11.68px] justify-center leading-[0] not-italic right-[185.91px] text-[#b2b2b2] text-[9.052px] translate-x-[100%] translate-y-[50%] w-[28.227px]">
        <p className="block leading-[normal]">online</p>
      </div>
    </div>
  );
}

function Groups1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[442.22px] h-[73.324px] right-[356.89px] w-[285.511px]"
      data-name="Groups"
    >
      <div
        className="absolute bg-[#181818] bottom-[0.65px] h-[72.027px] right-[-1.95px] rounded-[8.436px] w-[222.893px]"
        data-name="Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#353535] border-[0.324px] border-solid inset-0 pointer-events-none rounded-[8.436px]"
        />
      </div>
      <Button />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[43.48px] right-[34.72px] size-[7.787px]"
        data-name="Background"
        style={{ backgroundImage: `url('${imgBackground}')` }}
      />
      <div className="absolute bottom-[54.99px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[12.004px] justify-center leading-[0] not-italic right-[170.98px] text-[#b9b9b9] text-[9.149px] translate-x-[100%] translate-y-[50%] w-[123.613px]">
        <p className="block leading-[normal]">How did you hear about us?</p>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[53.53px] right-[200.51px] size-[4.218px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
    </div>
  );
}

function Groups2() {
  return (
    <div
      className="absolute bg-[position:50%_50%,_0%_0%] bg-[rgba(0,0,0,0)] bg-size-[cover,auto] bottom-[172.6px] h-[169.684px] right-[130.1px] w-[146.649px]"
      data-name="Groups"
      style={{ backgroundImage: `url('${imgGroups}')` }}
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[2.27px] h-[179.093px] right-[0.65px] w-[143.08px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage4}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[8.11px] h-[17.52px] right-[6.81px] rounded-[4.623px] w-[17.196px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage5}')` }}
      />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[234.57px] h-[32.769px] right-[375.38px] w-[46.071px]"
      data-name="Button"
    >
      <div
        className="absolute bg-[#050505] bottom-[1.3px] h-[29.849px] right-[1.62px] rounded-[8.436px] w-[42.827px]"
        data-name="Background"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#292929] border-[0.649px] border-solid inset-0 pointer-events-none rounded-[8.436px]"
        />
      </div>
    </div>
  );
}

function Groups3() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[48.67px] h-[100.902px] right-[203.43px] w-[281.942px]"
      data-name="Groups"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[7.79px] h-[16.871px] right-[7.46px] rounded-[4.867px] w-[17.196px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage6}')` }}
      />
      <div className="absolute bottom-[49.96px] flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[26.604px] justify-center leading-[12.355px] not-italic right-[139.67px] text-[#bababa] text-[9.441px] text-center translate-x-[50%] translate-y-[50%] w-[189.151px]">
        <p className="block mb-0">{`“I am always doing things I can't do; that's`}</p>
        <p className="block">{`how I get to do them." - Picasso`}</p>
      </div>
    </div>
  );
}

function GroupVariant5() {
  return (
    <div className="absolute h-[143.657px] left-0 top-0 w-[145.915px]" data-name="Group/Variant5">
      <div className="absolute bottom-0 flex items-center justify-center left-[32.28%] right-[59.18%] top-[87.7%]">
        <div className="flex-none h-4 rotate-[197.537deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">F</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[85.18%_64.61%_2.36%_25.67%] items-center justify-center">
        <div className="flex-none h-4 rotate-[205.895deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[81.94%_69.72%_5.72%_19.59%] items-center justify-center">
        <div className="flex-none h-4 rotate-[214.149deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">a</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[79.51%_74.33%_9.8%_15.89%] items-center justify-center">
        <div className="flex-none h-4 rotate-[221.044deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">t</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[75.17%_77.19%_13.24%_10.99%] items-center justify-center">
        <div className="flex-none h-4 rotate-[228.044deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">u</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.05%_80.98%_18.72%_8.07%] items-center justify-center">
        <div className="flex-none h-4 rotate-[235.044deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">r</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[66.87%_83.17%_22.99%_4.57%] items-center justify-center">
        <div className="flex-none h-4 rotate-[242.044deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[60.77%_85.83%_29.62%_1.78%] items-center justify-center">
        <div className="flex-none h-4 rotate-[250.611deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">d</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[58.09%_87.75%_36.74%_0.96%] items-center justify-center">
        <div className="flex-none h-4 rotate-[257.298deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[51.62%_88.48%_41.02%_-0.02%] items-center justify-center">
        <div className="flex-none h-4 rotate-[264.194deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">B</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.43%_88.96%_48.63%_0.04%] items-center justify-center">
        <div className="flex-none h-4 rotate-[270.776deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">l</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.86%_88.36%_51.25%_0.09%] items-center justify-center">
        <div className="flex-none h-4 rotate-[277.044deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">o</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.84%_86.64%_57.13%_1.14%] items-center justify-center">
        <div className="flex-none h-4 rotate-[285.612deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">g</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[30.3%_85.56%_62.91%_3.25%] items-center justify-center">
        <div className="flex-none h-4 rotate-[292.194deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[24.67%_83.21%_65.8%_4.86%] items-center justify-center">
        <div className="flex-none h-4 rotate-[297.94deg] w-[7px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">-</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[21.46%_81.65%_70.04%_7.71%] items-center justify-center">
        <div className="flex-none h-4 rotate-[303.686deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[15.93%_78%_72.63%_10.08%] items-center justify-center">
        <div className="flex-none h-4 rotate-[310.164deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">F</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[10.93%_73.74%_77.04%_14.89%] items-center justify-center">
        <div className="flex-none h-4 rotate-[318.522deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[6.78%_68.97%_80.85%_20.43%] items-center justify-center">
        <div className="flex-none h-4 rotate-[326.776deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">a</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[4.57%_65.75%_83.91%_26.32%] items-center justify-center">
        <div className="flex-none h-4 rotate-[333.672deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">t</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[2.01%_60.28%_85.64%_30.91%] items-center justify-center">
        <div className="flex-none h-4 rotate-[340.672deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">u</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0.88%_56.64%_87.5%_37.67%] items-center justify-center">
        <div className="flex-none h-4 rotate-[347.672deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">r</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0.04%_50.86%_88.35%_42.66%] items-center justify-center">
        <div className="flex-none h-4 rotate-[354.672deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[88.53%] flex items-center justify-center left-[49.34%] right-[43.88%] top-0">
        <div className="flex-none h-4 rotate-[3.239deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">d</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[0.61%_39.99%_87.94%_55.41%] items-center justify-center">
        <div className="flex-none h-4 rotate-[9.925deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[1.37%_32.53%_86.16%_58.39%] items-center justify-center">
        <div className="flex-none h-4 rotate-[16.821deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">B</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[3.82%_28.65%_84.85%_64.48%] items-center justify-center">
        <div className="flex-none h-4 rotate-[23.403deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">l</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[5.34%_22.94%_82.23%_66.87%] items-center justify-center">
        <div className="flex-none h-4 rotate-[29.672deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">o</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[9.22%_16.44%_78.15%_71.93%] items-center justify-center">
        <div className="flex-none h-4 rotate-[38.239deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">g</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[13.89%_13.79%_76.25%_76.53%] items-center justify-center">
        <div className="flex-none h-4 rotate-[44.821deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[16.89%_9.76%_72.27%_78.72%] items-center justify-center">
        <div className="flex-none h-4 rotate-[50.567deg] w-[7px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">-</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[21.57%_7.67%_69.94%_81.69%] items-center justify-center">
        <div className="flex-none h-4 rotate-[56.314deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[25.18%_4.33%_64.78%_83.42%] items-center justify-center">
        <div className="flex-none h-4 rotate-[62.791deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">F</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.82%_1.85%_59.31%_86%] items-center justify-center">
        <div className="flex-none h-4 rotate-[71.15deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[38.86%_0.4%_53.62%_87.82%] items-center justify-center">
        <div className="flex-none h-4 rotate-[79.403deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">a</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.81%_0.07%_49.99%_88.77%] items-center justify-center">
        <div className="flex-none h-4 rotate-[86.299deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">t</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[43.45%] flex items-center justify-center left-[88.74%] right-0 top-[50.35%]">
        <div className="flex-none h-4 rotate-[93.299deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">u</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[56.19%_0.57%_38.4%_88.03%] items-center justify-center">
        <div className="flex-none h-4 rotate-[100.299deg] w-[5px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">r</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[59.96%_1.53%_31.41%_86.37%] items-center justify-center">
        <div className="flex-none h-4 rotate-[107.299deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">e</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[65.47%_3.83%_24.03%_83.61%] items-center justify-center">
        <div className="flex-none h-4 rotate-[115.866deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">d</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[70.99%_7.21%_20.67%_82.07%] items-center justify-center">
        <div className="flex-none h-4 rotate-[122.553deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[73.6%_9.54%_14.48%_78.08%] items-center justify-center">
        <div className="flex-none h-4 rotate-[129.448deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">B</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[78.54%_14.56%_11.51%_75.85%] items-center justify-center">
        <div className="flex-none h-4 rotate-[136.03deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">l</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[80.41%_17.28%_7.38%_71.68%] items-center justify-center">
        <div className="flex-none h-4 rotate-[142.299deg] w-2">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">o</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[84.01%_23.27%_3.21%_66%] items-center justify-center">
        <div className="flex-none h-4 rotate-[150.866deg] w-[9px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">g</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[86.86%_29.65%_1.79%_63.61%] items-center justify-center">
        <div className="flex-none h-4 rotate-[157.448deg] w-1">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[88.07%_33.51%_-0.14%_58.73%] items-center justify-center">
        <div className="flex-none h-4 rotate-[163.195deg] w-[7px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#dc0073] text-[13.263px] text-nowrap">
            <p className="block leading-[normal] whitespace-pre">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[46%_12.18%_22.08%_64.77%]">
      <GroupVariant5 />
    </div>
  );
}

function Groups4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[450.004px] right-[0.41px] w-[632.991px]" data-name="Groups">
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[-1.3px] h-[132.049px] right-[-8.44px] rounded-tl-[3.244px] rounded-tr-[2.271px] w-[103.173px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage7}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[355.59px] h-[146.324px] right-[149.89px] w-[117.773px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage8}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[14.92px] h-[17.196px] right-[276.75px] rounded-[4.461px] w-[16.871px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage9}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[84.36px] right-[500.94px] size-[111.933px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage10}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[90.52px] h-[17.196px] right-[507.11px] rounded-[4.623px] w-[16.871px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
      <Groups2 />
      <Button1 />
      <div className="absolute bottom-[322.33px] flex flex-col font-['Playfair_Display:Regular',_sans-serif] font-normal h-[130.102px] justify-center leading-[0] right-[667.06px] text-[#bebebc] text-[28.421px] translate-x-[100%] translate-y-[50%] w-[387.711px]">
        <p className="block leading-[35.396px]">
          Transforming ideas into digital reality with innovative solutions and cutting-edge technology.
        </p>
      </div>
      <Groups3 />
      <Frame1 />
    </div>
  );
}

function Groups5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[450.653px] right-0 w-[934.4px]" data-name="Groups">
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[24.33px] right-[883.46px] rounded-[8.841px] size-[26.604px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage12}')` }}
      />
      <Groups4 />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[209.59px] h-[170.658px] right-0 w-[35.689px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage13}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[102.52px] h-[16.871px] right-[694.31px] rounded-[4.542px] w-[17.52px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage14}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[96.36px] h-[189.151px] right-[694.31px] rounded-br-[1.947px] rounded-tl-[13.627px] w-[127.182px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage15}')` }}
      />
    </div>
  );
}

function Groups6() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[361.43px] h-[222.569px] right-[743.63px] w-[190.773px]"
      data-name="Groups"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[9.08px] h-[17.196px] right-[9.41px] rounded-[4.542px] w-[16.871px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage16}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[-14.6px] h-[199.533px] right-[-23.36px] w-[159.951px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage17}')` }}
      />
      <div className="absolute bottom-[189.07px] flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[51px] justify-center leading-[0] not-italic right-[167.77px] text-[#dc0073] text-[24.982px] translate-x-[100%] translate-y-[50%] w-[175px]">
        <p className="block leading-[normal]">Harkeswanen</p>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[584px] left-0 right-0 top-0" data-name="Root">
      <div className="absolute bg-[#050505] h-[584px] left-0 right-0 top-0" data-name="Image" />
      <Groups />
      <Groups1 />
      <Groups5 />
      <Groups6 />
    </div>
  );
}

function Groups7() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-0 h-[21.738px] right-[118.42px] w-[14.924px]"
      data-name="Groups"
    />
  );
}

function Groups8() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[6.81px] h-[18.493px] right-[273.18px] w-[32.444px]"
      data-name="Groups"
    >
      <div className="absolute bottom-[0.97px] h-[0.973px] right-[2.6px] w-[22.062px]" data-name="Background" />
      <div className="absolute bottom-[10.71px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[6.489px] justify-center leading-[0] not-italic right-[32.45px] text-[#dc0073] text-[11.68px] translate-x-[100%] translate-y-[50%] w-[35.689px]">
        <p className="block leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function SlideInLeftState1() {
  return (
    <div
      className="absolute h-[9.084px] left-[366.02px] top-[1160.28px] w-[174.876px]"
      data-name="Slide In Left/state 1"
    >
      <div className="absolute bottom-[4.54px] flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[9.084px] justify-center leading-[0] not-italic opacity-0 right-[349.75px] text-[#dc0073] text-[24.982px] translate-x-[100%] translate-y-[50%] w-[174.876px]">
        <p className="block leading-[normal]">Harkeswanen</p>
      </div>
    </div>
  );
}

function Blink() {
  return (
    <div className="absolute h-[9.084px] left-[347.28px] top-[1149.48px] w-[174.876px]" data-name="Blink">
      <div className="absolute bottom-[4.54px] flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-[9.084px] justify-center leading-[0] not-italic opacity-0 right-[174.88px] text-[#dc0073] text-[24.982px] translate-x-[100%] translate-y-[50%] w-[174.876px]">
        <p className="block leading-[normal]">Harkeswanen</p>
      </div>
    </div>
  );
}

function Groups9() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0)] bottom-[526.57px] h-[27.902px] right-[14.28px] w-[934.4px]"
      data-name="Groups"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat bottom-[4.22px] h-[1.947px] right-[42.18px] w-[3.569px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage18}')` }}
      />
      <div className="absolute bottom-[16.38px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[7.462px] justify-center leading-[0] not-italic right-[57.1px] text-[#acacac] text-[11.68px] translate-x-[100%] translate-y-[50%] w-[41.529px]">
        <p className="block leading-[normal]">Legal</p>
      </div>
      <div className="absolute bottom-[16.55px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[7.138px] justify-center leading-[0] not-italic right-[121.34px] text-[#a2a2a2] text-[11.68px] translate-x-[100%] translate-y-[50%] w-[56.453px]">
        <p className="block leading-[normal]">{`Contact `}</p>
      </div>
      <Groups7 />
      <div className="absolute bottom-[17.2px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[7.138px] justify-center leading-[0] not-italic right-[186.56px] text-[#a9a9a9] text-[11.68px] translate-x-[100%] translate-y-[50%] w-[53.209px]">
        <p className="block leading-[normal]">Careers</p>
      </div>
      <div className="absolute bottom-[16.68px] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic right-[249.5px] text-[#a8a8a8] text-[11.68px] translate-x-[100%] translate-y-[50%] w-[55.156px]">
        <p className="block leading-[normal]">{`About `}</p>
      </div>
      <Groups8 />
      <SlideInLeftState1 />
      <Blink />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative size-full" data-name="homepage">
      <Root />
      <Groups9 />
    </div>
  );
}