import {
    o as i,
    c as d,
    a as e,
    u as D,
    r as _,
    b as S,
    t as s,
    w as L,
    d as f,
    e as V,
    f as k,
    g as P,
    h as b,
    n as F,
    T as M,
    i as U,
    j as q,
    k as $,
    l as Q,
    m as C,
    p as w,
    F as j,
    q as G,
    s as J,
    v as K,
    x as Y,
    y as Z,
    z as ee,
    A as oe
} from "./vendor.f8fe0241.js";
const se = function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
    new MutationObserver(t => {
        for (const a of t)
            if (a.type === "childList")
                for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(t) {
        const a = {};
        return t.integrity && (a.integrity = t.integrity), t.referrerpolicy && (a.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? a.credentials = "include" : t.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function o(t) {
        if (t.ep) return;
        t.ep = !0;
        const a = r(t);
        fetch(t.href, a)
    }
};
se();
var ne = "./images/background.ae616610.jpg",
    v = (p, n) => {
        const r = p.__vccOpts || p;
        for (const [o, t] of n) r[o] = t;
        return r
    };
const ae = {
        setup() {}
    },
    le = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor"
    },
    ce = e("path", {
        d: "M16 6.459 2.145.042v25.5L16 31.959l13.855-6.417V.042zm8.208 15.458-8.172 3.78-8.167-3.78V8.937l8.167 3.781 8.172-3.781z"
    }, null, -1),
    de = [ce];

function me(p, n, r, o, t, a) {
    return i(), d("svg", le, de)
}
var z = v(ae, [
    ["render", me]
]);
const fe = {
        components: {
            McAfeeIconBlank: z
        },
        emits: ["onStartQuickScanButtonClicked"],
        setup(p, {
            emit: n
        }) {
            const {
                t: r
            } = D();
            return {
                onStartQuickScanButtonClicked: () => {
                    n("onStartQuickScanButtonClicked")
                },
                t: r
            }
        }
    },
    pe = {
        class: "max-w-2xl w-full shadow-lg shadow-neutral-900/30 bg-white border-2 border-white"
    },
    ue = {
        class: "py-4 px-6 bg-gradient-to-b from-red-600 to-red-700 text-white flex items-center"
    },
    Ce = {
        class: "ml-6"
    },
    _e = {
        class: "font-medium text-lg"
    },
    Se = {
        class: "py-4 px-6 text-neutral-700 space-y-2"
    },
    we = {
        class: "font-medium text-lg leading-tight"
    },
    ge = {
        class: "py-4 px-6 bg-neutral-100 flex justify-end items-center"
    };

function ve(p, n, r, o, t, a) {
    const l = _("McAfeeIconBlank");
    return i(), d("div", pe, [e("div", ue, [S(l, {
        class: "h-8 w-8 text-white"
    }), e("div", Ce, [e("p", _e, s(o.t("intro.title")), 1), e("p", null, s(o.t("intro.subTitle")), 1)])]), e("div", Se, [e("p", null, s(o.t("intro.content1")), 1), e("p", we, s(o.t("intro.content2")), 1), e("p", null, s(o.t("intro.content3")), 1)]), e("div", ge, [e("button", {
        onClick: n[0] || (n[0] = L((...m) => o.onStartQuickScanButtonClicked && o.onStartQuickScanButtonClicked(...m), ["prevent"])),
        class: "border-2 border-sky-700 py-2 px-5 bg-gradient-to-b from-sky-600 to-sky-700 hover:from-sky-700 transition-colors text-white rounded-sm"
    }, s(o.t("intro.buttonCaption")), 1)])])
}
var he = v(fe, [
    ["render", ve]
]);
const ye = {
        setup() {}
    },
    xe = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 264.583 304.253"
    },
    De = e("path", {
        style: {
            fill: "#c01818"
        },
        transform: "matrix(3.63939 0 0 3.63939 0 0)",
        d: "m36.3 67.2-21.4-9.9v-34l21.4 9.9V16.8L0 0v66.8l36.3 16.8z"
    }, null, -1),
    be = e("path", {
        style: {
            fill: "#75160d"
        },
        transform: "matrix(3.63939 0 0 3.63939 0 0)",
        d: "m36.3 67.2 21.5-9.9v-34l-21.5 9.9V16.8L72.7 0v66.8L36.3 83.6z"
    }, null, -1),
    Fe = [De, be];

function Pe(p, n, r, o, t, a) {
    return i(), d("svg", xe, Fe)
}
var R = v(ye, [
        ["render", Pe]
    ]),
    Me = "./images/product.0ec5395b.png";
const Ae = {
        components: {
            McAfeeIcon: R
        },
        setup() {
            const {
                d: p,
                t: n
            } = D(), r = f(0), o = f(0), t = link1, a = V(() => {
                const u = new Date;
                return u.setDate(u.getDate() - 1)
            });
            let l = 60 * 4 - 1;
            return k(() => {
                r.value = parseInt(l / 60, 10), o.value = parseInt(l % 60, 10), o.value = o.value < 10 ? "0" + o.value : o.value;
                const u = setInterval(() => {
                    r.value = parseInt(l / 60, 10), o.value = parseInt(l % 60, 10), o.value = o.value < 10 ? "0" + o.value : o.value, --l < 0 && clearInterval(u)
                }, 1e3)
            }), {
                d: p,
                countdownMinutes: r,
                countdownSeconds: o,
                expiredOn: a,
                onOfferButtonClicked: () => {
                    window.open(t, "_blank"), setTimeout(() => {
                        window.onfocus = () => {
                            window.location.href = link2
                        }
                    }, 1e3)
                },
                productImage: Me,
                t: n
            }
        }
    },
    We = {
        class: "z-30 absolute top-0 left-0 max-w-3xl w-full shadow-lg border border-neutral-300 shadow-neutral-900/40 bg-white text-neutral-700 overflow-hidden"
    },
    Ie = {
        class: "p-4 flex items-center justify-between border-b border-neutral-200"
    },
    Ee = {
        class: "inline-flex items-center"
    },
    ke = e("div", {
        class: "ml-4 font-medium"
    }, "McAfee Total Protection", -1),
    Re = P('<div class="inline-flex items-center space-x-4"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>', 1),
    Ne = {
        class: "bg-gradient-to-b from-red-600 to-red-700 text-white p-4 text-center"
    },
    Oe = {
        class: "p-4 grid grid-cols-3 gap-8"
    },
    Te = {
        class: "text-sm"
    },
    Be = {
        class: "text-xs leading-tight"
    },
    Le = {
        class: "mt-4 p-4 bg-neutral-100 rounded-sm"
    },
    Ve = {
        class: "space-y-2"
    },
    je = P('<li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span class="ml-2 truncate block">Win32/Rbot</span></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span class="ml-2 truncate block">Win32/Adware.SystemSecurity.AL</span></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span class="ml-2 truncate block">Win32/Sirefef.A</span></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span class="ml-2 truncate block">Win32/Spatet.A</span></li><li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span class="ml-2 truncate block">HTML/Iframe.B.Gen</span></li>', 5),
    Ue = {
        class: "leading-tight"
    },
    Ge = {
        class: "font-bold text-red-500"
    },
    ze = {
        class: "leading-tight"
    },
    He = e("p", null, "McAfee WebAdvisor:", -1),
    Xe = {
        class: "font-bold text-red-500"
    },
    qe = {
        class: "col-span-2 text-center"
    },
    $e = {
        class: "text-lg"
    },
    Qe = {
        class: "font-bold text-red-500"
    },
    Je = {
        class: "mt-4"
    },
    Ke = {
        class: "mt-4 text-xs"
    },
    Ye = {
        class: "mt-6 flex justify-center items-center"
    },
    Ze = ["src"],
    eo = {
        class: "ml-6 flex-1 text-left"
    },
    oo = {
        class: "text-lg text-red-500 font-bold"
    },
    so = ["innerHTML"],
    io = {
        class: "mt-4"
    };

function to(p, n, r, o, t, a) {
    const l = _("McAfeeIcon");
    return i(), d("div", We, [e("div", Ie, [e("div", Ee, [e("div", null, [S(l, {
        class: "h-5 w-5"
    })]), ke]), Re]), e("div", Ne, s(o.t("offer.title")), 1), e("div", Oe, [e("div", Te, [e("div", Be, s(o.t("offer.followingThreatsWereFound")) + ":", 1), e("div", Le, [e("ul", Ve, [je, e("li", Ue, [e("p", null, s(o.t("offer.identityProtection")) + ":", 1), e("p", Ge, s(o.t("offer.disabled")), 1)]), e("li", ze, [He, e("p", Xe, s(o.t("offer.disabled")), 1)])])])]), e("div", qe, [e("div", $e, [e("p", null, s(o.t("offer.protectionExpiredOn")), 1), e("p", Qe, s(o.d(o.expiredOn, "short")), 1)]), e("div", Je, [e("p", null, s(o.t("offer.content1")), 1), e("p", Ke, s(o.t("offer.content2")), 1), e("div", Ye, [e("img", {
        src: o.productImage,
        alt: "",
        class: "h-48 w-auto"
    }, null, 8, Ze), e("div", eo, [e("p", oo, s(o.t("offer.discountTitle")), 1), e("p", {
        innerHTML: o.t("offer.discountTimeLeft", [o.countdownMinutes, o.countdownSeconds])
    }, null, 8, so), e("div", io, [e("button", {
        onClick: n[0] || (n[0] = L((...m) => o.onOfferButtonClicked && o.onOfferButtonClicked(...m), ["prevent"])),
        class: "bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 text-white py-2 px-4 rounded-sm border-2 border-red-700"
    }, s(o.t("offer.buttonCaption")), 1)])])])])])])])
}
var ro = v(Ae, [
    ["render", to]
]);
const no = {
        components: {
            McAfeeIcon: R
        },
        emits: ["onStartMcAfeeButtonClicked"],
        setup(p, {
            emit: n
        }) {
            const {
                t: r
            } = D(), o = V(() => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> a / 4).toString(16)));
            return {
                onStartMcAfeeButtonClicked: () => {
                    n("onStartMcAfeeButtonClicked")
                },
                quickScanId: o,
                t: r
            }
        }
    },
    ao = {
        class: "z-20 absolute top-0 left-0 ml-12 mt-12 max-w-xl w-full shadow-lg border border-neutral-300 shadow-neutral-900/40 bg-white text-neutral-700 overflow-hidden"
    },
    lo = {
        class: "p-4 flex items-center justify-between border-b border-neutral-200"
    },
    co = {
        class: "inline-flex items-center"
    },
    mo = {
        class: "ml-4 font-medium"
    },
    fo = P('<div class="inline-flex items-center space-x-4"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>', 1),
    po = {
        class: "p-4 flex justify-center items-center text-white bg-gradient-to-b from-red-600 to-red-700"
    },
    uo = {
        class: "text-lg"
    },
    Co = {
        class: "p-4 space-y-4"
    },
    _o = {
        class: "text-lg"
    },
    So = ["innerHTML"],
    wo = {
        class: "text-center py-4"
    },
    go = {
        class: "text-xs text-right text-neutral-400"
    };

function vo(p, n, r, o, t, a) {
    const l = _("McAfeeIcon");
    return i(), d("div", ao, [e("div", lo, [e("div", co, [e("div", null, [S(l, {
        class: "h-5 w-5"
    })]), e("div", mo, s(o.t("quickScanComplete.title")), 1)]), fo]), e("div", po, [e("p", uo, s(o.t("quickScanComplete.subTitle")), 1)]), e("div", Co, [e("p", _o, s(o.t("quickScanComplete.content1")), 1), e("p", null, s(o.t("quickScanComplete.content2")), 1), e("p", {
        innerHTML: o.t("quickScanComplete.content3")
    }, null, 8, So), e("p", null, s(o.t("quickScanComplete.content4")), 1), e("div", wo, [e("button", {
        onClick: n[0] || (n[0] = L((...m) => o.onStartMcAfeeButtonClicked && o.onStartMcAfeeButtonClicked(...m), ["prevent"])),
        class: "border-2 border-yellow-400 py-2 px-4 font-medium bg-gradient-to-b from-yellow-300 to-yellow-400 hover:from-yellow-400 rounded-sm"
    }, s(o.t("quickScanComplete.buttonCaption")), 1)]), e("p", go, s(o.t("quickScanComplete.yourQuickScanId")) + ": " + s(o.quickScanId), 1)])])
}
var ho = v(no, [
        ["render", vo]
    ]),
    N = ["C:\\Windows\\Boot\\EFI\\hu-HU/bootmgfw.efi.mui", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\PSP Driver\\WTx86/amdpsp.cat", "C:\\Windows\\Boot\\EFI\\ru-RU/bootmgfw.efi.mui", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\lib2to3\\fixes/__init__.py", "C:\\Windows\\System32\\InstallShield\\setupdir\\001f/_setup.dll", "C:\\Program Files\\NVIDIA Corporation\\FrameViewSDK\\SDK\\Private_Release/FvSDK.h", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX86\\Microsoft Shared\\OFFICE16\\1031/MSOINTL.DLL", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_wpd.inf_amd64_0245a364d71cf6b5/c_wpd.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\lsi_sas2i.inf_amd64_b4e933c4540ad3cc/lsi_sas2i.sys", "C:\\Windows\\InputMethod\\CHT/ChtChangjie.lex", "C:\\Program Files (x86)\\Bonjour\\Bonjour.Resources\\fr.lproj/About Bonjour.rtf", "C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\ASP.NETWebAdminFiles\\Images/alert_lrg.gif", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\visualvm/.lastModified", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.Optimus.{27804D4D-013D-49CF-9A94-80D666030F85}/OptimusUpdate.NVX", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\www\\assets\\main\\img/geforce_16.png", "C:\\Windows\\System32\\ro-RO/quickassist.exe.mui", "C:\\Windows\\System32\\Speech_OneCore\\Engines\\SR/spsreng_onecore.dll", "C:\\Program Files (x86)\\Windows Defender/MpAsDesc.dll", "C:\\Program Files (x86)\\Windows Media Player/setup_wm.exe", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\fr/license.html", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\demo\\jvmti\\hprof/src.zip", "C:\\Windows\\SysWOW64\\Com/comadmin.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\he\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netxex64.inf_amd64_ede00b448bfe8099/ixe60x64.sys", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\headset\\HW_btn/move.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\043E/epbmpres.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\content-disposition/index.js", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\profiler\\lib\\deployed\\jdk16\\windows-amd64/profilerinterface.dll", "C:\\Windows\\System32\\IME\\IMEKR\\APPLETS/imkrcac.dll", "C:\\Windows\\System32\\drivers/afunix.sys", "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\Framework\\.NETFramework\\v3.5\\Profile\\Unity Subset v3.5\\RedistList/Frameworklist.xml", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0/Diagnostics.Format.ps1xml", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.PhysX.{189028F1-F590-48C1-9D81-FEE3D195CCFE}\\files\\Engine\\549B931E903E/PhysXCore.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\btn/asus_ac_btn2_d_c_l.png", "C:\\Program Files\\Common Files\\microsoft shared\\ink\\fi-FI/tipresx.dll.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_mcx.inf_amd64_fcbcc3807cbf63ec/c_mcx.inf", "C:\\Windows\\SystemApps\\Microsoft.Windows.PinningConfirmationDialog_cw5n1h2txyewy/AppxBlockMap.xml", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\express\\lib\\router/index.js", "C:\\Program Files\\PCHealthCheck\\pt/PCHealthCheck.exe.mui", "C:\\Program Files\\Internet Explorer\\de-DE/iexplore.exe.mui", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Web.Services.resources\\v4.0_4.0.0.0_de_b03f5f7f11d50a3a/System.Web.Services.resources.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\net819xp.inf_amd64_ff7a5dd4f9b1ceba/net819xp.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Diagnostics.Contracts\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Diagnostics.Contracts.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Core.resources\\v4.0_4.0.0.0_de_b77a5c561934e089/System.Core.resources.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\tsprint.inf_amd64_6066bc96a5f28b44\\amd64/tsprint.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\GPIO Promontory Driver\\RS2\\x64/amdgpio3.inf", "C:\\Program Files\\ENE\\Aac_ENE RGB HAL\\x86/SB_SMBUS_SDK.dll", "C:\\Windows\\System32\\Speech_OneCore\\Common\\de-DE/DictationCommands.0407.grxml", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\es/DocumentCaptureCore.resources.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\hotkey_instruction\\type2/profile2.png", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netvchannel.inf_amd64_ba3e73aa330c95d6/netvchannel.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\en_US/701.plg", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.AddIn\\v4.0_4.0.0.0__b77a5c561934e089/System.AddIn.dll", "C:\\Windows\\System32\\Speech\\Engines\\SR/spsreng.dll", "C:\\Windows\\Boot\\EFI/boot.stl", "C:\\Program Files\\WindowsPowerShell\\Modules\\PowerShellGet\\1.0.0.1/PowerShellGet.psd1", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\org.eclipse.babel.nls_eclipse_ja_4.4.0.v20140623020002/eclipse_update_120.jpg", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\lib/knockout-3.4.0.js", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_PackageResource/MSFT_PackageResource.psm1", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\NetNat/MSFT_NetNat.cdxml", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-client\\node_modules\\debug/browser.js", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\ac_common\\control_header/asus_ac_control_header_d_l.png", "C:\\Windows\\SystemApps\\Windows.CBSPreview_cw5n1h2txyewy\\microsoft.system.package.metadata\\Autogen/JSByteCodeCache_64", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\www/avatar_generic_118.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\id\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\nvhda.inf_amd64_5705482660676f1a/nvhda.inf", "C:\\Windows\\SystemApps\\ParentalControls_cw5n1h2txyewy\\Assets/Logo.scale-100.png", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Linq\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Linq.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\ISE/ise.psm1", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Data.Entity\\v4.0_4.0.0.0__b77a5c561934e089/System.Data.Entity.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Dtc.PowerShell\\v4.0_10.0.0.0__31bf3856ad364e35/Microsoft.Dtc.PowerShell.dll", "C:\\Windows\\SysWOW64\\en-US/AccountsRT.dll.mui", "C:\\Windows\\Boot\\PCAT\\fr-FR/bootmgr.exe.mui", "C:\\Program Files\\Common Files\\Avid\\Audio\\Plug-Ins\\FabFilter Pro-Q 3.aaxplugin\\Contents\\x64/FabFilter Pro-Q 3.aaxplugin", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdm5674a.inf_amd64_ec8de8952888a618/mdm5674a.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\pt/701.plg", "C:\\Windows\\Boot\\EFI\\lv-LV/bootmgr.efi.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\ru\\c8c5a921-89db-4d27-94d6-8ac825ca6b78/String.def", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\WindowsDeveloperLicense/WindowsDeveloperLicense.psd1", "C:\\Program Files\\Common Files\\Avid\\Audio\\Plug-Ins\\VocAlignUltra.aaxplugin\\Contents\\x64\\Presets\\VocAlignUltra\\Vocal\\Double\\Dub with Gaps -  SmartAlign OFF/Slightly Loose Timing & Pitch.RPPreset", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmsupr3.inf_amd64_9cb7ddc26e30b52c/mdmsupr3.inf", "C:\\Windows\\rescache\\_merged\\1840795356/3092038988.pri", "C:\\Program Files\\Waves Central\\resources\\res\\external\\license/eula.pdf", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\JOURNAL/JOURNAL.INF", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\AIOFanSDK/ArmouryAIOSDK.dll", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\DirectAccessClientComponents/MSFT_DAClientExperienceConfiguration.cdxml", "C:\\Windows\\System32\\it-IT/cdosys.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-parser/binary.js", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netl260a.inf_amd64_783312763f8749c7/l260x64.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\bth.inf_amd64_81928e56856a6cf6/bthenum.sys", "C:\\Program Files (x86)\\WindowsPowerShell\\Modules\\PackageManagement\\1.0.0.1\\DSCResources\\MSFT_PackageManagementSource\\de-DE/MSFT_PackageManagementSource.strings.psd1", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\soffice.cfg\\modules\\sglobal\\menubar/menubar.xml", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\SFH Driver/dpinst.exe", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Office.Tools.Outlook.Implementation\\v4.0_10.0.0.0__b03f5f7f11d50a3a/Microsoft.Office.Tools.Outlook.Implementation.dll", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\TRANSLAT\\ENFR/MSB1ENFR.ITS", "C:\\Program Files (x86)\\MSBuild\\15.0\\FileTracker\\1041/FileTracker64UI.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\SFHI2C Driver\\WT\\x64\\amdsfhspbi2c/amdsfhspbi2c.cat", "C:\\Windows\\System32\\DriverStore\\FileRepository\\push2_display.inf_amd64_6c2b9846f800bbfd/push2_display.cat", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\en_US\\0333034e-95e7-44df-ae87-044f99cf34b2/String.def", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00F7\\AppInfo1\\es/701.plg", "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\Config/legacy.web_hightrust.config", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\www\\l10n\\share/cs-CZ.json", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\org.eclipse.ecf.filetransfer.httpclient4.ssl.feature_1.0.0.v20140827-1444/about.html", "C:\\Windows\\SystemApps\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\Ratings/RatingStars30.contrast-white_scale-200.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\en_US\\7fdc86bc-75a9-4ae6-b24e-d169fcfeac1c/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wpdmtp.inf_amd64_42b97498c7087292/WpdMtp.dll", "C:\\Windows\\SystemApps\\Microsoft.Windows.FilePicker_cw5n1h2txyewy/AppxBlockMap.xml", "C:\\Program Files\\TeamSpeak 3 Client\\sqldrivers/qsqlite.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Applications\\Extensions\\Print/icon32.png", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\parseuri/index.js", "C:\\Windows\\SysWOW64\\sr-Latn-RS/quickassist.exe.mui", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\plugins\\com.jrockit.mc.rjmx_5.5.2.174165/plugin.properties", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\PROFILE/PROFILE.ELM", "C:\\Windows\\SysWOW64\\zh-CN/cdosys.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvStreamSrv/NvGfeServiceBridge.dll", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\SFH Driver\\WT\\x64\\amdsfhkmdf/amdsfhkmdf.inf", "C:\\Windows\\SystemApps\\Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy\\microsoft.system.package.metadata\\Autogen/JSByteCodeCache_64", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\PhysX\\files\\Engine/A_Ball_Trans.ico", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\0407/epdocx2res.dll", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\SmbShare/Smb.format.ps1xml", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\f12host/f12host.html", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Applications\\Extensions\\SugarSync/icon32.png", "C:\\Windows\\LastGood\\system32/nvapi.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netrtl64.inf_amd64_8e9c2368fe308df2/netrtl64.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\id\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\OpenOffice 4\\share\\Scripts\\beanshell\\HelloWorld/helloworld.bsh", "C:\\Windows\\System32\\Nui/FaceAnalysisColor.mdl", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\base64id\\lib/base64id.js", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_ArchiveResource\\de-DE/MSFT_ArchiveResource.schema.mfl", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\sqlite3/dbapi2.py", "C:\\Windows\\Boot\\PCAT\\pl-PL/bootmgr.exe.mui", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\ASP.NETWebAdminFiles\\Security\\App_LocalResources/security.aspx.resx", "C:\\Windows\\Microsoft.NET\\DirectX for Managed Code\\1.0.2906.0/Microsoft.DirectX.Direct3DX.xml", "C:\\Program Files (x86)\\Microsoft\\EdgeWebView\\Application\\97.0.1072.76\\WidevineCdm\\_platform_specific\\win_x64/widevinecdm.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_scsiadapter.inf_amd64_efffb8c026d3abc5/c_scsiadapter.inf", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\p2\\org.eclipse.equinox.p2.core\\cache/artifacts.xml", "C:\\Program Files (x86)\\Common Files\\PACE\\Services\\LicenseServices/LDSvc.exe", "C:\\Windows\\SystemApps\\Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy\\speech\\0409/tokens_enUS.xml", "C:\\Program Files\\Steinberg\\VSTPlugins/soothe2_x64.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\ms\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\IOV_WT Driver/dpinst.exe", "C:\\Program Files\\Steinberg\\VSTPlugins/soothe2_x86.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\microsoft_bluetooth_a2dp.inf_amd64_614ec8e6e63777b7/microsoft_bluetooth_a2dp.inf", "C:\\Windows\\INF\\ServiceModelOperation 3.0.0.0\\0000/_ServiceModelOperationPerfCounters_D.ini", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\platform\\core\\locale/core_ja.jar", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\ms\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\rescache\\_merged\\1559747874/3275048612.pri", "C:\\Windows\\System32\\DriverStore\\FileRepository\\perceptionsimulationsixdofmodels.inf_amd64_acff50a7960b7d19/PerceptionSimulationSixDofModels.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\da/701.scp", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\ROG Strix Impact\\Upgrade_P303/Device.ini", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\www\\l10n\\gfn/cs-CZ.json", "C:\\Windows\\System32\\DriverStore\\FileRepository\\intelpmax.inf_amd64_2ddee95f7a5d85db/intelpmax.sys", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\soffice.cfg\\modules\\sweb\\toolbar/basicshapes.xml", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\ctypes\\macholib/dyld.py", "C:\\Windows\\SysWOW64\\it-IT/APHostRes.dll.mui", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\www\\l10n\\notifications/cs-CZ.json", "C:\\Windows\\Boot\\PCAT\\ja-JP/bootmgr.exe.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\net9500-x64-n650f.inf_amd64_e92c5a65e41993f9/net9500-x64-n650f.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\hu\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\sv/701.plg", "C:\\Windows\\INF\\BITS\\0000/bitsctrs.ini", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\wizard\\web\\images/calc.gif", "C:\\Windows\\Boot\\DVD\\EFI/BCD", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\www\\l10n\\settings/cs-CZ.json", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\base64-arraybuffer/package.json", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\etc/visualvm.clusters", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\0410/epdocx2res.dll", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\debugger\\images/breakOnExceptions.png", "C:\\Program Files\\CCleaner\\Data/usercfg.ini", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\CONFIG\\Browsers/avantgo.browser", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Applications\\Extensions\\OpenApplication/icon.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\el/701.plg", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.PowerShell.Commands.Management.Resources\\v4.0_3.0.0.0_de_31bf3856ad364e35/Microsoft.PowerShell.Commands.Management.Resources.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USB Filter Driver\\WTx86/usbfilter.cat", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode/downloader.js", "C:\\Windows\\System32\\Com/comempty.dat", "C:\\Windows\\SysWOW64\\wbem\\de-DE/cliegaliases.mfl", "C:\\Program Files\\Windows Defender\\de-DE/EppManifest.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Engine\\B1E4CC1EB042/PhysXCore.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\vi/701.scp", "C:\\Program Files (x86)\\Microsoft\\EdgeCore\\97.0.1072.76/concrt140.dll", "C:\\Program Files\\Microsoft Office\\root\\Office16\\ADDINS\\Microsoft Power Query for Excel Integrated\\bin\\de/Microsoft.Mashup.Client.Excel.resources.dll", "C:\\Program Files\\ASUS\\AURA lighting effect add-on x64/AuraLayerManager.dll", "C:\\Windows\\SysWOW64\\ras/cis.scp", "C:\\Program Files\\Microsoft Office\\root\\Office16\\Bibliography\\Sort/TAG.XSL", "C:\\Windows\\SysWOW64\\ru-RU/cdosys.dll.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\hidi2c.inf_amd64_aad0f43cb9f97e75/hidi2c.inf", "C:\\Windows\\SysWOW64\\zh-TW/cdosys.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Engine\\86C5F4F22ECD/APEX_TurbulenceFS_x64.dll", "C:\\Windows\\Boot\\PCAT\\fi-FI/memtest.exe.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\it/701.plg", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00F7\\AppInfo1\\tr\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesX86\\Microsoft Analysis Services\\AS OLEDB\\140/Microsoft.AnalysisServices.AzureClient.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\stexstor.inf_amd64_fefc1160d15aa667/stexstor.sys", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\TUF GAMING M3\\Resource_P305\\ProgressBar/277x8_progressbar_bg.png", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\demo\\nbproject\\jfc\\SampleTree\\nbproject/file-targets.xml", "C:\\Windows\\rescache\\_merged\\2303349843/3575259070.pri", "C:\\Windows\\rescache\\_merged\\136650022/1952553866.pri", "C:\\Program Files\\Common Files\\Avid\\Audio\\Plug-Ins\\VocAlignUltra.aaxplugin\\Contents\\x64\\Presets\\VocAlignUltra\\Rap\\Low Pitch Dub/Slightly Loose Timing & Pitch.RPPreset", "C:\\Windows\\SysWOW64\\da-DK/cdosys.dll.mui", "C:\\Windows\\twain_64_BACKUP\\Kodak\\kds_i900/a shortcut to kds_i900.lnk", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\HDAudio/HDAudio.nvi", "C:\\Program Files\\Microsoft Office\\root\\Office16\\1031\\DataServices/+Verbindung mit neuer Datenquelle herstellen.odc", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wnetvsc_vfpp.inf_amd64_9ce6f68c11eede58/wnetvsc_vfpp.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\cs\\E6382097-F710-43b4-AB7D-F9C61F6A3FEE/String.def", "C:\\Program Files (x86)\\OpenOffice 4\\share\\template\\wizard\\letter\\nl/bus-elegant_l.ott", "C:\\Program Files\\Nefarius Software Solutions\\ScpToolkit\\Driver\\amd64/libusb0_x86.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Windows.ApplicationServer.Applications\\v4.0_4.0.0.0__31bf3856ad364e35/Microsoft.Windows.ApplicationServer.Applications.dll", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\NvvHCI/nvvhci.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\id\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_pnpprinters.inf_amd64_0c653d53a35b896c/c_pnpprinters.inf", "C:\\Windows\\PolicyDefinitions/AVSValidationGP.admx", "C:\\Windows\\System32\\DriverStore\\de-DE/3ware.inf_loc", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\id/701.plg", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\jre\\lib\\images\\cursors/cursors.properties", "C:\\Windows\\ELAMBKUP/WdBoot.sys", "C:\\Windows\\SysWOW64\\Licenses\\neutral\\_Default\\Core/license.rtf", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\engine.io-client\\node_modules\\debug/browser.js", "C:\\Windows\\SystemApps\\Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy\\speech\\1009/tokens_enCA.xml", "C:\\Windows\\SysWOW64\\migration\\de-DE/SxsMigPlugin.dll.mui", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\demo\\nbproject\\management\\FullThreadDump\\nbproject/file-targets.xml", "C:\\Program Files (x86)\\InstallShield Installation Information\\{3EA3D312-6FBA-422F-BC4E-F6072B75E506}/config.ini", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\ASP.NETWebAdminFiles\\Security\\Permissions/managePermissions.aspx", "C:\\Program Files (x86)\\MSBuild\\15.0\\FileTracker\\1041/FileTracker32UI.dll", "C:\\Windows\\rescache\\_merged\\3272964934/3110075101.pri", "C:\\Windows\\Boot\\PCAT\\fi-FI/bootmgr.exe.mui", "C:\\Windows\\System32\\InstallShield\\setupdir\\002d/_setup.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\etag/index.js", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\CANYON/CANYON.ELM", "C:\\Program Files\\Common Files\\microsoft shared\\VC/msdia100.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_64\\Microsoft.CertificateServices.PKIClient.Cmdlets\\v4.0_10.0.0.0__31bf3856ad364e35/Microsoft.CertificateServices.PKIClient.Cmdlets.dll", "C:\\Windows\\rescache\\_merged\\63008123/3598203979.pri", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\core\\view/backstack-chrome-breadcrumb-template.html", "C:\\Windows\\System32\\DriverStore\\FileRepository\\prnms014.inf_amd64_faec3fc366f8e1fa\\Amd64/MSMPS-manifest.ini", "C:\\Program Files\\Common Files\\microsoft shared\\ink\\fsdefinitions\\osknumpad/osknumpadbase.xml", "C:\\Windows\\System32\\DriverStore\\FileRepository\\ialpss2i_gpio2_skl.inf_amd64_b68199ad84607c21/iaLPSS2i_GPIO2_SKL.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wgencounter.inf_amd64_f496147578cad554/wgencounter.inf", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.PhysX.{189028F1-F590-48C1-9D81-FEE3D195CCFE}\\files\\Engine\\86C5F4F22ECD/APEX_TurbulenceFS_x64.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netrtwlanu.inf_amd64_1815bafd14dc59f0/netrtwlanu.inf", "C:\\Program Files\\Microsoft Office\\root\\Office16\\sdxs\\FA000000018_de-de/catalog.json", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\speech\\0c0a/tokens_esES.xml", "C:\\Windows\\SysWOW64\\Speech_OneCore\\Engines\\SR/spsrx_onecore.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\WindowsOptionalFeatureSet/WindowsOptionalFeatureSet.psd1", "C:\\Program Files\\Microsoft Office\\root\\Office16\\ODBC Drivers\\Salesforce\\lib\\LibCurl64.DllA\\OpenSSL64.DllA/libssl-1_1-x64.dll", "C:\\Windows\\System32\\lt-LT/quickassist.exe.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\zh_TW/701.scp", "C:\\Program Files (x86)\\OpenOffice 4\\program/about.png", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Net.Primitives\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Net.Primitives.dll", "C:\\Program Files\\Microsoft Office\\root\\Office16\\ADDINS\\PowerPivot Excel Add-in\\Cartridges/as90.xsl", "C:\\Windows\\SysWOW64\\Nui/FaceAnalysisColor.mdl", "C:\\Windows\\SysWOW64\\sl-SI/quickassist.exe.mui", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.Optimus.{27804D4D-013D-49CF-9A94-80D666030F85}/OptimusUpdate.nvi", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice/asus_framework.exe", "C:\\Windows\\rescache\\_merged\\482193516/1022723414.pri", "C:\\Windows\\twain_32\\Brims17a\\ADS-1700WN/TwDsFe.ds", "C:\\Windows\\System32\\DriverStore\\FileRepository\\acpitime.inf_amd64_e1498a974ab95ea7/acpitime.inf", "C:\\Program Files\\Microsoft Office\\root\\Office16\\sdxs\\FA000000042_de-de/catalog.json", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\has-binary/package.json", "C:\\Windows\\System32\\DriverStore\\FileRepository\\usbstor.inf_amd64_2be0e52237040d42/USBSTOR.SYS", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\th/701.plg", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\express\\lib/application.js", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\DEEPBLUE/DEEPBLUE.ELM", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\device_pic\\scale-100\\rog_logo/asus_gc_ios_tabbar_system_ic_rog.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\zh_CN\\4a49fe69-b658-4091-b618-772a9143be8c/String.def", "C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Engine\\6FE164B5308A/PhysXCore.dll", "C:\\Program Files (x86)\\OpenOffice 4\\help\\de\\sdatabase.idxl/_0.cfs", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\component-bind/component.json", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\osc/app.js", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Applications\\Extensions\\SharePoint/icon.png", "C:\\Windows\\System32\\InstallShield\\setupdir\\0008/_setup.dll", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\plugins\\org.eclipse.ui.themes_1.0.1.v20140819-1717\\css\\dark/e4-dark_basestyle.css", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netvwwanmp.inf_amd64_f9e30429669d7fff/netvwwanmp.inf", "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\ASP.NETWebAdminFiles\\App_Code/ApplicationConfigurationPage.cs", "C:\\Windows\\System32\\DriverStore\\FileRepository\\storfwupdate.inf_amd64_e57f4de14d125fac/storfwupdate.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\msdv.inf_amd64_5c153f7ff7d0d00a/msdv.inf", "C:\\Windows\\INF\\MSDTC Bridge 3.0.0.0/_TransactionBridgePerfCounters.ini", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USB3.0HostController Driver\\x86/amdxhc.sys", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\www\\l10n\\user-profile/da-DK.json", "C:\\Windows\\SystemApps\\ShellExperienceHost_cw5n1h2txyewy/AppxManifest.xml", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\ms/701.scp", "C:\\Windows\\System32\\DriverStore\\FileRepository\\microsoft_bluetooth_hfp_hf.inf_amd64_0c00f8f3a465c9a4/microsoft_bluetooth_hfp_hf.inf", "C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\WPF\\Fonts/GlobalSansSerif.CompositeFont", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\ROG Strix Impact\\Resource_P303\\TUF\\Button/btm_d.png", "C:\\Windows\\SysWOW64\\Speech_OneCore\\Engines\\TTS/MSTTSLoc_OneCore.dll", "C:\\Program Files\\Microsoft Office\\root\\Office16\\Bibliography\\Sort/AUTHOR.XSL", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\DeliveryOptimization/DeliveryOptimizationStatus.psm1", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\NvVHCI.{B5D14640-F4D7-4E13-BCBC-960CE5BA59E3}\\x86/nvvhci.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\amdas4.inf_amd64_a52a29189b655f91/AmdAS4.cat", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\041F/Epbmpres.dll", "C:\\Windows\\System32\\catroot\\{F750E6C3-38EE-11D1-85E5-00C04FC295EE}/10.CAT", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USB3.0HostController Driver/amdxhc.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Icons\\buttons/job01.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\cs\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\PCI Driver\\WTx64/AMDPCIDev.cat", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\de/license.html", "C:\\Windows\\System32\\DriverStore\\FileRepository\\prnms008.inf_amd64_69b5e0c918eab9a6\\Amd64/unishare3d-manifest.ini", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\E7C8DA76-C9B9-4297-8681-DD878330AFE7\\js/Device_Menu_JSON.js", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\1033/alinkui.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\msux64w10.inf_amd64_5aa81644af5957b3/msux64w10.sys", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\ms/msipc.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\qs/.eslintignore", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_smartcardfilter.inf_amd64_3573afe136371e51/c_smartcardfilter.inf", "C:\\Program Files (x86)\\Windows Mail/wabimp.dll", "C:\\Windows\\SystemApps\\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\\ScreenClipping\\ScreenClipping\\Assets\\Sounds/camerashutter.wav", "C:\\Program Files (x86)\\ASUS\\Update\\Download\\{FC7B4D4A-6A2D-47F5-B2CE-CB5574D3EDC7}\\4.2.12.4/10252-IIWWW6-9e5b72470665f15c7abde70801595b11.zip", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\debugger\\Cursor\\images/currentLocationArrow.png", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.ComponentModel.Composition.resources\\v4.0_4.0.0.0_de_b77a5c561934e089/System.ComponentModel.Composition.resources.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_64\\Microsoft.Management.Infrastructure.Native\\v4.0_1.0.0.0__31bf3856ad364e35/Microsoft.Management.Infrastructure.Native.dll", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\locales/am.pak", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\pl/701.scp", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\parsejson/index.js", "C:\\Windows\\SysWOW64\\InstallShield\\setupdir\\0006/_setup.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Policy.3.0.Microsoft.BackgroundIntelligentTransfer.Management\\v4.0_10.0.0.0__31bf3856ad364e35/Policy.3.0.Microsoft.BackgroundIntelligentTransfer.Management.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-client\\dist/socket.io.js.map", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\zh_CN\\c8c5a921-89db-4d27-94d6-8ac825ca6b78/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netmlx4eth63.inf_amd64_3809a4a3e7e07703/mlx4eth63.sys", "C:\\Program Files\\Microsoft Office\\root\\Integration/C2RIntLoc.de-de.16.msi", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\mime-types/package.json", "C:\\Windows\\SoftwareDistribution\\Download/8bd300079b33dd31a0459e5a8f651e51720abb73", "C:\\Program Files\\Bonjour/mdnsNSP.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\Microsoft.PowerShell.Archive\\de-DE/ArchiveResources.psd1", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\GFExperience\\www\\assets\\cefclient\\img\\1.5X/Lock1.5.png", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\et/license.html", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\engine.io\\lib/server.js", "C:\\Windows\\System32\\DriverStore\\FileRepository\\iastorav.inf_amd64_87f761c07c99d5e7/iaStorAVC.sys", "C:\\Program Files (x86)\\Reference Assemblies\\Microsoft\\FSRM\\v7.0/srmlib.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\has-cors/index.js", "C:\\Windows\\SystemApps\\Microsoft.AccountsControl_cw5n1h2txyewy\\Assets/Logo.Theme-Dark_Scale-100.png", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\NvContainer.Session.{79171F19-F4E9-4B36-B334-F81D6E6BC378}/NvContainerSession.NVX", "C:\\Windows\\System32\\DriverStore\\FileRepository\\ialpss2i_gpio2_skl.inf_amd64_b68199ad84607c21/iaLPSS2i_GPIO2.sys", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\1031/cscompui.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ar/DocumentCapture.resources.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_ProcessResource\\de-DE/MSFT_ProcessResource.strings.psd1", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\nv-localstore/package.json", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\org.eclipse.ecf.filetransfer.httpclient4.ssl.feature_1.0.0.v20140827-1444\\META-INF/ECLIPSE_.RSA", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\ws\\lib/BufferUtil.fallback.js", "C:\\Program Files (x86)\\ENE\\io/ene.sys", "C:\\Windows\\System32\\InstallShield\\setupdir\\0007/_setup.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\pt/701.scp", "C:\\Windows\\System32\\InputMethod\\CHS/ChsIFEComp.dll", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\MsDtc\\de/Microsoft.Dtc.PowerShell.Resources.dll", "C:\\Program Files\\Java\\jdk1.8.0_211\\jre\\lib\\deploy/ffjcext.zip", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Windows.Controls.Ribbon\\v4.0_4.0.0.0__b77a5c561934e089/System.Windows.Controls.Ribbon.dll", "C:\\Windows\\System32\\Dism/AppxProvider.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\volume.inf_amd64_bfabc750039f8ac1/volume.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\en_US/701.plg", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\PhysX\\files\\Engine\\73BE2921551D\\ImplicitLibs/PhysX3GpuCHECKED_x86.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\partition/buttom_btn_p.png", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmmcom.inf_amd64_9179c145f01530e4/mdmmcom.inf", "C:\\Windows\\diagnostics\\system\\Video\\de-DE/DiagPackage.dll.mui", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\memoryAnalyzer\\images/i_info.png", "C:\\Windows\\System32\\DriverStore\\FileRepository\\amdgpio2.inf_amd64_c72fc3523c1372d0/amdgpio2.cat", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\sample/README", "C:\\Windows\\Globalization\\ELS\\HyphenationDictionaries/MsHy7de.lex", "C:\\Windows\\System32\\InstallShield\\setupdir\\0009/_setup.dll", "C:\\Program Files\\NVIDIA Corporation\\Update Core/NvBackendAPI64.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\MBLedSDK\\Tools/AsTaskSched.dll", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\jre\\lib\\cmm/CIEXYZ.pf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmrock.inf_amd64_9b13bcc1f320d1ad/mdmrock.inf", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.GFExperience.{CBC03AC9-A5F7-4223-8E0C-4C0B3C6C0C32}/GFExperience.NVX", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netl1e64.inf_amd64_8d5ca5ab1472fc44/L1E62x64.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\xvdd.inf_amd64_6609e687a8e31bb7/xvdd.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\msgpiowin32.inf_amd64_46634fa071d1db0d/msgpiowin32.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\UIAutomationProvider\\v4.0_4.0.0.0__31bf3856ad364e35/UIAutomationProvider.dll", "C:\\Windows\\PLA\\Rules\\de-DE/Rules.System.Common.xml", "C:\\Program Files\\Java\\jdk1.8.0_211\\jre\\lib\\cmm/CIEXYZ.pf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\lsi_sas3i.inf_amd64_79c7a4d8be0a9744/lsi_sas3i.sys", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\cs\\7fdc86bc-75a9-4ae6-b24e-d169fcfeac1c/String.def", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\express\\lib\\middleware/init.js", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.WSMan.Management\\v4.0_3.0.0.0__31bf3856ad364e35/Microsoft.WSMan.Management.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\headset\\HW_btn/light on.png", "C:\\Windows\\SoftwareDistribution\\SLS\\522D76A4-93E1-47F8-B8CE-07C937AD1A1E/sls.cab", "C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Engine\\C22346819C37/PhysXCore.dll", "C:\\Program Files (x86)\\OpenOffice 4\\share\\template\\wizard\\letter\\tr/bus-elegant_l.ott", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mod_gnss.inf_amd64_e45cf3add7f69b8e/mod_gnss.cat", "C:\\Windows\\Microsoft.NET\\Framework64\\v3.5\\SQL\\EN/DropSqlPersistenceProviderLogic.sql", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_smartcardreader.inf_amd64_33a0db63c0afb351/c_smartcardreader.inf", "C:\\Windows\\SystemApps\\Microsoft.Windows.StartMenuExperienceHost_cw5n1h2txyewy/AppxBlockMap.xml", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\sample\\nio\\multicast/Reader.java", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\it\\4d2c004e-1794-4d17-9454-a91162d169df/String.def", "C:\\Windows\\INF\\MSDTC Bridge 4.0.0.0\\0407/_TransactionBridgePerfCounters_d.ini", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-client/package.json", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\xml/__init__.py", "C:\\Windows\\Boot\\EFI\\tr-TR/bootmgfw.efi.mui", "C:\\Program Files\\Common Files\\Avid\\Audio\\Plug-Ins\\VocAlignUltra.aaxplugin\\Contents\\x64\\Presets\\VocAlignUltra\\Dialogue\\Replacement\\Same Actor/Tight Timing.RPPreset", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\nv-localstore\\node_modules\\node-json-db\\node_modules\\.bin/mkdirp", "C:\\Windows\\System32\\DriverStore\\FileRepository\\push2_display.inf_amd64_a69feda50e7d431e\\amd64/WdfCoInstaller01009.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\SwAgent\\Theme\\ROG/btn_n.png", "C:\\Program Files (x86)\\OpenOffice 4\\share\\registry\\res/registry_de.xcd", "C:\\Program Files (x86)\\OpenOffice 4\\share\\basic\\ScriptBindingLibrary/dialog.xlb", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\OpenFolderAction/OpenFolderActionUI.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USB Filter Driver\\WTx64\\x64/usbfilter.sys", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\zh_CN\\DAEE9E18-F33F-484f-8AD4-CD4DD18C6BD5/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\usbhub3.inf_amd64_6a68abcc31aaa333/usbhub3.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\adp80xx.inf_amd64_efb36fdc260e8bc8/adp80xx.inf", "C:\\Windows\\OEMDRV\\Lan\\Realtek/rt640x64.cat", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\nl\\9d231cfd-3fe5-464c-ac9e-e5cadb4f820f/String.def", "C:\\Windows\\Microsoft.NET\\DirectX for Managed Code\\1.0.2907.0/Microsoft.DirectX.Direct3DX.xml", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\Wdac/MSFT_OdbcDriverTask_v1.0.cdxml", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\jre\\lib\\ext/cldrdata.jar", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesX86\\Microsoft Analysis Services\\AS OLEDB\\140\\Resources\\1031/msmdsrv.rll", "C:\\Windows\\apppatch\\de-DE/AcRes.dll.mui", "C:\\Windows\\rescache\\_merged\\88738775/3516563155.pri", "C:\\Program Files (x86)\\OpenOffice 4\\share\\registry/base.xcd", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\97.0.1072.76\\WidevineCdm\\_platform_specific\\win_x64/widevinecdm.dll.sig", "C:\\Windows\\INF\\SMSvcHost 4.0.0.0\\0407/_SMSvcHostPerfCounters_d.ini", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\mime/mime.js", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\hotkey_instruction\\type4/profile2.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\ja/701.plg", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\de/powershell_ise.resources.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\nv_dispi.inf_amd64_015fa42d67826549\\Display.NvContainer/dlsargs.xml", "C:\\Windows\\Boot\\PCAT\\en-US/memtest.exe.mui", "C:\\Windows\\SysWOW64\\it-IT/cdosys.dll.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\tr\\7fdc86bc-75a9-4ae6-b24e-d169fcfeac1c/String.def", "C:\\Windows\\Boot\\PCAT\\et-EE/bootmgr.exe.mui", "C:\\Windows\\rescache\\_merged\\4132880152/605375092.pri", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\ac_common\\scroll_bar/asus_gc_scrollbar_hint_portrait_n_l.png", "C:\\Windows\\INF\\.NET CLR Data/_DataPerfCounters.h", "C:\\Windows\\System32\\DriverStore\\FileRepository\\circlass.inf_amd64_9f3f831d13d3df1f/circlass.inf", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\engine.io-client\\node_modules\\ms/package.json", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\QtQuick\\Controls\\Private/AbstractCheckable.qml", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\ko/license.html", "C:\\Windows\\SysWOW64\\Speech\\SpeechUX/SpeechUXPS.DLL", "C:\\Windows\\System32\\fi-FI/APHostRes.dll.mui", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_32\\Microsoft.Tpm.Commands.Resources\\v4.0_10.0.0.0_de_31bf3856ad364e35/Microsoft.Tpm.Commands.Resources.dll", "C:\\Windows\\Boot\\EFI\\zh-CN/bootmgfw.efi.mui", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\ASP.NETWebAdminFiles\\Security\\App_LocalResources/security.aspx.de.resx", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\MSBuild/Microsoft.Build.Commontypes.xsd", "C:\\Windows\\Vss\\Writers\\System/0bada1de-01a9-4625-8278-69e735f39dd2.xml", "C:\\Program Files\\Nefarius Software Solutions\\ScpToolkit\\Driver/Ds3Controller_9e16dedb-8601-4d48-99c6-e13c309bf0ba.cat", "C:\\Windows\\System32\\DriverStore\\FileRepository\\megasas35i.inf_amd64_4df7f6223ebcd28d/megasas35i.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Reflection.Primitives\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Reflection.Primitives.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\PresentationFramework-SystemCore\\v4.0_4.0.0.0__b77a5c561934e089/PresentationFramework-SystemCore.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\UIAutomationClientsideProviders\\v4.0_4.0.0.0__31bf3856ad364e35/UIAutomationClientsideProviders.dll", "C:\\Program Files\\WindowsPowerShell\\Modules\\Pester\\3.4.0\\Functions/BreakAndContinue.Tests.ps1", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\th/701.plg", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\ROG Strix Impact\\Resource_P303\\TUF\\ProgressBar/277x8_progressbar_bg.png", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\fa-IR/license.html", "C:\\Program Files (x86)\\Microsoft\\EdgeWebView\\Application\\97.0.1072.76\\MEIPreload/preloaded_data.pb", "C:\\Program Files\\Microsoft Office\\root\\Office16\\ADDINS\\EduWorks Data Streamer Add-In\\de-de/Microsoft.DataStreamer.Core.resources.dll", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\de-DE/PSDesiredStateConfiguration.Resource.psd1", "C:\\Windows\\rescache\\_merged\\2396607887/171138246.pri", "C:\\Windows\\System32\\DriverStore\\FileRepository\\pci.inf_amd64_e8ca312fe4a0452d/pci.inf", "C:\\Program Files\\php\\sasl2/saslCRAMMD5.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\usbstor.inf_amd64_2be0e52237040d42/usbstor.inf", "C:\\Program Files (x86)\\OpenOffice 4\\help\\de/default.css", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_ServiceResource\\de-DE/MSFT_ServiceResource.strings.psd1", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\demo\\jvmti\\heapTracker\\lib/heapTracker.exp", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\0C04/Epbmpres.dll", "C:\\Windows\\Vss\\Writers\\System/75DFB225-E2E4-4d39-9AC9-FFAFF65DDF06.xml", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\ru/701.plg", "C:\\Program Files\\Microsoft Office\\root\\CLIPART\\Publisher\\Backgrounds/J0143744.GIF", "C:\\Windows\\addins/FXSEXT.ecf", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\ru/msipc.dll.mui", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\webapps\\inclusiveOobe\\js\\autopilot/accountsetupcategoryviewmodel.js", "C:\\Windows\\SysWOW64\\icsxml/cmnicfg.xml", "C:\\Program Files (x86)\\Microsoft\\EdgeCore\\97.0.1072.76\\Notifications/SoftLandingAssetLight.gif", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\MUI\\0407/mscorsecr.dll", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\wsgiref/handlers.py", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC/msipc.dll", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\INDUST/INDUST.INF", "C:\\Windows\\SystemApps\\Microsoft.Windows.OOBENetworkConnectionFlow_cw5n1h2txyewy\\speech\\0c09/tokens_enAU.xml", "C:\\Windows\\Boot\\PCAT\\tr-TR/bootmgr.exe.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\61883.inf_amd64_789f35bee584a939/61883.inf", "C:\\Program Files\\TeamSpeak 3 Client\\imageformats/qgif.dll", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\FrameViewSdk.{86A643DB-D5F8-497F-8C39-C36E953FB174}/FrameViewSdk.nvi", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netnb.inf_amd64_0dc913ad00b14824/netnb.inf", "C:\\Windows\\System32\\ja-JP/APHostRes.dll.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\da/701.plg", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\common\\Formatter/FormattedTextMapping.js", "C:\\Windows\\SysWOW64\\Speech_OneCore\\Engines\\TTS/MSTTSEngine_OneCore.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\component-inherit\\test/inherit.js", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wstorflt.inf_amd64_8375a9378e7227d5/vmstorfl.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmgl002.inf_amd64_9076ffc34f080cc1/mdmgl002.inf", "C:\\Windows\\Drivers\\Sound\\Realtek\\Win64\\Realtek\\RealtekASIO_5/realtekasio.cat", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\component-bind/index.js", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\soffice.cfg\\modules\\swform\\menubar/menubar.xml", "C:\\Windows\\SysWOW64\\Npcap/NpcapHelper.exe", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\TroubleshootingPack/TroubleshootingPack.format.ps1xml", "C:\\Windows\\Boot\\PCAT\\hu-HU/memtest.exe.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\base64-arraybuffer\\lib/base64-arraybuffer.js", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\RyzenPPKG Driver/AMDPPMSettings.exe", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\QtQuick\\Extras/CircularGauge.qml", "C:\\Program Files (x86)\\Bignox\\BigNoxVM\\RT\\newver\\YSDrv-single/YSDDR0.sys", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\ssl/certificate.crt", "C:\\Windows\\System32\\InstallShield\\setupdir\\001d/_setup.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\nv-localstore/localstore.js", "C:\\Program Files (x86)\\Common Files\\WPAPI/Folder.ico", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\isarray\\build/build.js", "C:\\Program Files (x86)\\WindowsPowerShell\\Modules\\PackageManagement\\1.0.0.1\\de/Microsoft.PackageManagement.MetaProvider.PowerShell.resources.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\zh_CN/701.plg", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\visualvm\\update_tracking/com-sun-tools-visualvm-api-caching.xml", "C:\\Windows\\System32\\DriverStore\\FileRepository\\heat.inf_amd64_b73306c081719f1f/heat.inf", "C:\\Program Files (x86)\\Windows Media Player\\Media Renderer/avtransport.xml", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\ShadowPlay.{711F45F0-0720-45FB-B00B-E590FD48BB5E}/ShadowPlay.NVX", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\webapps\\inclusiveOobe\\view/autopilotwhitegloveresult-main.html", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Web.DataVisualization\\v4.0_4.0.0.0__31bf3856ad364e35/System.Web.DataVisualization.dll", "C:\\Windows\\apppatch/AcRes.dll", "C:\\Windows\\System32\\pl-PL/APHostRes.dll.mui", "C:\\Program Files (x86)\\OpenOffice 4\\share\\gallery\\bullets/bluarrow.gif", "C:\\Windows\\SystemApps\\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\\ScreenClipping\\ScreenClipping\\Assets/LockScreenLogo.scale-200.png", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\nv-localstore\\node_modules\\node-json-db\\node_modules\\mkdirp\\node_modules\\minimist\\example/parse.js", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\pt\\4A282E77-FD75-41dc-A890-85AC217E261D/String.def", "C:\\Program Files\\ASUS\\AURA lighting effect add-on x64/AuraLayerManager.tlb", "C:\\Windows\\rescache\\_merged\\136650022/3699732994.pri", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\en/Microsoft.Expression.Interactions.resources.dll", "C:\\Program Files\\Common Files\\Avid\\Audio\\Plug-Ins\\VocAlignUltra.aaxplugin\\Contents\\x64\\Presets\\VocAlignUltra\\Dialogue\\Foreign/Loose Timing and Medium Pitch.RPPreset", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\97.0.1072.76\\Trust Protection Lists\\Sigma/Analytics", "C:\\Windows\\Speech_OneCore\\Engines\\TTS\\de-AT\\NUSData/m3079Michael.keyboard.NU2", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\plugins\\org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.200.v20141007-2033/eclipse_1655.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\xmlhttprequest-ssl/package.json", "C:\\Program Files\\Microsoft Office\\root\\vfs\\Windows\\SHELLNEW/EXCEL12.XLSX", "C:\\Windows\\System32\\DriverStore\\FileRepository\\vca.inf_amd64_6bbc643de0df118d/vca.inf", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\visualvm\\profiler/VERSION.txt", "C:\\Windows\\Logs\\MeasuredBoot/0000000055-0000000000.log", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\ac_common\\btn/asus_ac_btn1_d_l.png", "C:\\Windows\\SystemApps\\Microsoft.BioEnrollment_cw5n1h2txyewy\\microsoft.system.package.metadata\\Autogen/JSByteCodeCache_64", "C:\\Windows\\INF\\Windows Workflow Foundation 3.0.0.0\\0000/PerfCounters_D.ini", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\WindowsFeatureSet/WindowsFeatureSet.psd1", "C:\\Program Files (x86)\\OpenOffice 4\\help\\de\\swriter.idxl/_0.cfx", "C:\\Program Files\\Common Files\\microsoft shared\\ink\\th-TH/tipresx.dll.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00F7\\AppInfo1\\ru/701.scp", "C:\\Windows\\Microsoft.NET\\Framework\\v1.1.4322/regsvcs.exe.config", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_GroupResource\\de-DE/MSFT_GroupResource.strings.psd1", "C:\\Windows\\Drivers\\Sound\\Realtek\\Win64/HDXASUS.inf", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\97.0.1072.76\\ResiliencyLinks\\VisualElements/LogoBeta.png.DATA", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\pt/license.html", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\installer.{223CE5D2-1D2D-4506-B492-77634258FCA9}\\GFExperience/EULA.txt", "C:\\Windows\\SystemApps\\Microsoft.Windows.FileExplorer_cw5n1h2txyewy\\microsoft.system.package.metadata\\Autogen/JSByteCodeCache_64", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\it/701.scp", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\WindowsBase.resources\\v4.0_4.0.0.0_de_31bf3856ad364e35/WindowsBase.resources.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Security.Cryptography.Primitives\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Security.Cryptography.Primitives.dll", "C:\\Program Files\\Microsoft Office\\root\\Document Themes 16/Gallery.thmx", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.PhysX.{189028F1-F590-48C1-9D81-FEE3D195CCFE}\\files\\Engine\\5182B3C9EFEC/PhysXCore.dll", "C:\\Windows\\System32\\spp\\tokens\\pkeyconfig/pkeyconfig.xrm-ms", "C:\\Program Files\\Windows Portable Devices/sqmapi.dll", "C:\\Windows\\SystemApps\\Microsoft.Windows.OOBENetworkCaptivePortal_cw5n1h2txyewy\\speech\\0804/tokens_zhCN.xml", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\org.eclipse.ecf.filetransfer.ssl.feature_1.0.0.v20140827-1444/epl-v10.html", "C:\\Windows\\Microsoft.NET\\DirectX for Managed Code\\1.0.2908.0/Microsoft.DirectX.Direct3DX.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\hidbthle.inf_amd64_bfb3ee8e5a97c3be/Microsoft.Bluetooth.Profiles.HidOverGatt.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\UART Driver\\WT\\x86/amduart.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Applications\\Extensions\\GoogleDrive/icon32.png", "C:\\Program Files (x86)\\Microsoft\\EdgeCore\\97.0.1072.76\\Locales/am.pak", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-adapter/index.js", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Net.resources\\v4.0_4.0.0.0_de_b03f5f7f11d50a3a/System.Net.resources.dll", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\debugger/debugger.css", "C:\\Program Files (x86)\\Bignox\\BigNoxVM\\vcredist/eula.1031.txt", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\PROOF/MSWDS_EN.LEX", "C:\\Program Files (x86)\\WindowsPowerShell\\Modules\\Microsoft.PowerShell.Operation.Validation\\1.0.1\\Test/Microsoft.PowerShell.Operation.Validation.Tests.ps1", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\es\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_64\\Microsoft.CertificateServices.PKIClient.Cmdlets\\v4.0_10.0.0.0__31bf3856ad364e35/pki.psd1", "C:\\Program Files\\WindowsPowerShell\\Modules\\Pester\\3.4.0\\en-US/about_BeforeEach_AfterEach.help.txt", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.PhysX.{189028F1-F590-48C1-9D81-FEE3D195CCFE}\\files\\Engine\\v2.7.6/PhysXCore.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_32\\Microsoft.KeyDistributionService.Cmdlets\\v4.0_10.0.0.0__31bf3856ad364e35/Kds.psd1", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.PowerShell.Editor\\v4.0_3.0.0.0__31bf3856ad364e35/Microsoft.PowerShell.Editor.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\amdgpio2.inf_amd64_808fe94735c4c6b3/amdgpio2.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\perceptionsimulationsixdof.inf_amd64_3ff016f4df6d2b8a/PerceptionSimulationSixDof.inf", "C:\\Windows\\SysWOW64\\IME\\IMEJP/IMJPCD.DLL", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\th\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\Microsoft.PowerShell.ODataUtils/Microsoft.PowerShell.ODataAdapter.ps1", "C:\\Program Files (x86)\\Common Files\\System\\msadc\\de-DE/msadcor.dll.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\prnms001.inf_amd64_8bc1bda6cf47380c/mxdwdui.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmgl003.inf_amd64_6b639ff361f628eb/mdmgl003.inf", "C:\\Program Files\\Nefarius Software Solutions\\ScpToolkit\\Db/_DBreezeSchema", "C:\\Program Files\\Common Files\\microsoft shared\\ink\\en-GB/tipresx.dll.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_apo.inf_amd64_a261b6effa32e5a2/c_apo.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Policy.1.0.System.Management.Automation\\v4.0_1.0.0.0__31bf3856ad364e35/Policy.1.0.System.Management.Automation.dll", "C:\\Windows\\Boot\\EFI\\sr-Latn-RS/bootmgr.efi.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\zh_CN/701.scp", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\ServiceSet/ServiceSet.psd1", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.ServiceModel.Security\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.ServiceModel.Security.dll", "C:\\Program Files\\Microsoft Office\\root\\Office16\\PUBBA/MSPUB11.BDR", "C:\\Windows\\System32\\DriverStore\\FileRepository\\bcmwdi.inf_amd64_eb8576f87be90122/bcmihvsrv64.dll", "C:\\Windows\\Pixtran\\help\\networkisis_po_files/configdevsetpo.gif", "C:\\Program Files (x86)\\ASUS\\PCE-AC68 WLAN Card Utilities\\Driver\\PCE-AC68\\Win81/bcm43xx.cat", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Web.Extensions.resources\\v4.0_4.0.0.0_de_31bf3856ad364e35/System.Web.Extensions.resources.dll", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\TUF GAMING M3\\Resource_P305\\TUF\\Image/Armoury-icon_w.ico", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\ASP.NETWebAdminFiles\\Providers\\App_LocalResources/chooseProviderManagement.aspx.resx", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\ROG Strix Impact\\Resource_P303\\ASUS\\Button/btm_n.png", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\ASP.NETWebAdminFiles\\Images/alert_sml.gif", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\NetworkTransition/MSFT_Net6to4Configuration.cdxml", "C:\\Program Files\\Common Files\\TechSmith Shared\\Updater\\ja-JP/TSCUpdClt.resources.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\SFH Driver/dpinst.exe", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\de/701.plg", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\ffmt\\local\\0404/epdocx2res.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Xml.XmlSerializer\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Xml.XmlSerializer.dll", "C:\\Program Files (x86)\\Common Files\\Microsoft Shared\\VS7Debug\\1040/pdmui.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_UserResource/MSFT_UserResource.psm1", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_32\\MSBuild\\v4.0_4.0.0.0__b03f5f7f11d50a3a/msbuild.exe.config", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_64\\System.Data.OracleClient\\v4.0_4.0.0.0__b77a5c561934e089/System.Data.OracleClient.dll", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\PhysX\\files\\Engine\\v2.7.5/NxCooking.dll", "C:\\Windows\\SysWOW64\\Dism\\de-DE/AssocProvider.dll.mui", "C:\\Program Files (x86)\\Blackmagic Design\\Blackmagic RAW\\Blackmagic RAW Player\\plugIns\\iconengines/qsvgicon.dll", "C:\\Program Files (x86)\\OpenOffice 4\\share\\template\\wizard\\letter\\pt-BR/bus-modern_l.ott", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_swcomponent.inf_amd64_f378d70fa39d3577/c_swcomponent.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\brims17a.inf_amd64_c91bf99b8b0a262c\\DBASE\\LangComm/farg_eng.dat", "C:\\Windows\\System32\\DriverStore\\FileRepository\\windowstrustedrtproxy.inf_amd64_db5be14d5e02560f/WindowsTrustedRTProxy.inf", "C:\\Program Files\\Microsoft Office\\root\\Office16\\LivePersonaCard\\images\\default/linkedin_ghost_profile.png", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Runtime.Serialization.Json\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Runtime.Serialization.Json.dll", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\CIR Driver\\WT/AMDCIR.inf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\nl\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\hotkey_instruction\\type1/profile2.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00F7\\AppInfo1\\ja\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\acpipmi.inf_amd64_310dc613a7e31ec8/acpipmi.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\jsc.resources\\v4.0_10.0.0.0_de_b03f5f7f11d50a3a/JSC.resources.dll", "C:\\Program Files\\Microsoft Office\\root\\Office16\\AugLoop/third-party-notices.txt", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\Microsoft.WinJS-reduced\\css/ui-dark.css", "C:\\Program Files (x86)\\OpenOffice 4\\share\\gallery\\rulers/blkballs.gif", "C:\\Program Files\\TeamSpeak 3 Client/changelog.txt", "C:\\Windows\\OEMDRV\\Sound\\Realtek/HDXASUS.inf", "C:\\Program Files\\Waves Central\\resources\\res\\external\\bin\\instl.bundle\\Contents\\Win64\\win32com\\shell/shell.pyd", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\AMDAS4 Driver\\RS2x64\\x64/AmdAS4.sys", "C:\\Windows\\Boot\\PCAT\\ja-JP/memtest.exe.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\en/701.plg", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.PowerShell.Utility.Activities.Resources\\v4.0_3.0.0.0_de_31bf3856ad364e35/Microsoft.PowerShell.Utility.Activities.Resources.dll", "C:\\Program Files\\Microsoft Office\\root/c2rx.sccd", "C:\\Windows\\diagnostics\\system\\Search\\de-DE/CL_LocalizationData.psd1", "C:\\Windows\\SysWOW64\\Recovery/ReAgent.xml", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Office.Tools.Outlook\\v4.0_10.0.0.0__b03f5f7f11d50a3a/Microsoft.Office.Tools.Outlook.dll", "C:\\Windows\\SystemApps\\ParentalControls_cw5n1h2txyewy/AppLimitPage.xbf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\amdi2c.inf_amd64_d7ae71f8eb52c084/amdi2c.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_image.inf_amd64_31731e48047fa274/c_image.inf", "C:\\Windows\\INF/1394.PNF", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wpdfs.inf_amd64_1183fd0f13045f2e/wpdfs.inf", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\lib/dt.jar", "C:\\Windows\\rescache\\_merged\\2662047327/557679514.pri", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Text.RegularExpressions\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Text.RegularExpressions.dll", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\NvBackend/FeatureWhitelist.json", "C:\\Windows\\System32\\DriverStore\\FileRepository\\brims17a.inf_amd64_c91bf99b8b0a262c\\amd64/BrCiImg.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Windows.Diagnosis.Commands.UpdateDiagReport.Resources\\v4.0_1.0.0.0_de_31bf3856ad364e35/Microsoft.Windows.Diagnosis.Commands.UpdateDiagReport.resources.dll", "C:\\Program Files\\Google\\Chrome\\Application\\97.0.4692.99\\MEIPreload/preloaded_data.pb", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\I2C Driver\\WT\\x86/amdi2c.cat", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\common\\Formatter\\Css/CssEmitter.js", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\Display.Optimus/OptimusUpdate.nvi", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\view\\43B63097-9F58-41CC-9375-BB546CE27F4E\\resources\\src\\images\\rog\\scale-100\\device_page\\mouse\\hotkey_instruction\\type2/profile1.png", "C:\\Windows\\System32\\DriverStore\\FileRepository\\usbser.inf_amd64_8de53ed035d71856/usbser.PNF", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_ucm.inf_amd64_c30468a947db0fa8/c_ucm.inf", "C:\\Windows\\INF\\MSDTC\\0407/msdtcprf.ini", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\iSCSI/iSCSI.psd1", "C:\\Program Files\\ASUS\\ARMOURY CRATE Lite Service\\GameLibraryPlugIn/GameLauncher.exe", "C:\\Program Files\\Waves Central\\resources\\res\\external\\bin\\instl.bundle\\Contents\\Win64\\help/instl_help.yaml", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources/DSCResourceHelper.psm1", "C:\\Windows\\System32\\nl-NL/APHostRes.dll.mui", "C:\\Windows\\diagnostics\\system\\Audio/AudioDiagnosticSnapIn.dll", "C:\\Windows\\SystemResources\\Windows.UI.Cred/Windows.UI.Cred.pri", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\QtQuick\\Controls\\Styles\\Base/ApplicationWindowStyle.qmlc", "C:\\Windows\\SysWOW64\\Dism/AssocProvider.dll", "C:\\Windows\\System32\\wbem\\xml/cim20.dtd", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\hu/701.scp", "C:\\Program Files (x86)\\Microsoft\\EdgeCore\\97.0.1072.76\\Installer/msedge_7z.data", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\zh_HK/701.scp", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\soffice.cfg\\modules\\scalc\\statusbar/statusbar.xml", "C:\\Program Files (x86)\\ExitLag\\styles/qwindowsvistastyle.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\zh_TW/701.plg", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\ko\\4A282E77-FD75-41dc-A890-85AC217E261D/String.def", "C:\\Windows\\Boot\\EFI\\fr-CA/bootmgr.efi.mui", "C:\\Windows\\SystemApps\\Microsoft.XboxGameCallableUI_cw5n1h2txyewy\\Control/ErrorStatePane.xbf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\lsi_sas.inf_amd64_74bb5e3e01cfd526/lsi_sas.inf", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\locales/ar.pak", "C:\\Windows\\INF\\SMSvcHost 3.0.0.0/_SMSvcHostPerfCounters.h", "C:\\Windows\\Migration\\WTR/netfx45_upgradecleanup.inf", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\UART Driver\\WT\\x64/amduart.inf", "C:\\Windows\\Boot\\PCAT\\sr-Latn-RS/bootmgr.exe.mui", "C:\\Windows\\System32\\Speech\\Engines\\TTS/MSTTSEngine.dll", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USBController Driver\\Win7\\x64/amdxhci.cat", "C:\\Windows\\System32\\setup/comsetup.dll", "C:\\Windows\\WaaS\\tasks/5ffea6126f02e78b9099eb4614d2d339f03ca5a8.xml", "C:\\Program Files\\NVIDIA Corporation\\NvStreamSrv/cudart64_101.dll", "C:\\Program Files\\Microsoft Office\\root\\Document Themes 16\\Theme Effects/Banded Edge.eftx", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\symbol/l_2people.bmp", "C:\\Program Files\\Microsoft Office\\root\\vfs\\Common AppData\\Microsoft\\OFFICE/AssetLibrary.ico", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Dtc.PowerShell.Resources\\v4.0_10.0.0.0_de_31bf3856ad364e35/Microsoft.Dtc.PowerShell.Resources.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\it\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\Common Files\\Microsoft Shared\\VS7Debug\\1042/pdmui.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Linq.Expressions\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Linq.Expressions.dll", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727/Accessibility.dll", "C:\\Windows\\System32\\de-DE\\Licenses\\_Default\\Core/license.rtf", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\OFFICE16\\Office Setup Controller\\Office.de-de/BRANDING.DLL", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\zh_CN/701.scp", "C:\\Program Files\\Windows Media Player\\Network Sharing/ContentDirectory.xml", "C:\\Program Files\\Microsoft Office\\root\\Office16\\1036/MSO.ACL", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Activities.Build\\v4.0_4.0.0.0__31bf3856ad364e35/Microsoft.Activities.Build.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\de/701.plg", "C:\\Windows\\SysWOW64\\hr-HR/comctl32.dll.mui", "C:\\Windows\\SystemApps\\Microsoft.XboxGameCallableUI_cw5n1h2txyewy\\Toolkit\\Images/dash.png", "C:\\Program Files (x86)\\OpenOffice 4\\share\\Scripts\\python/HelloWorld.py", "C:\\Program Files (x86)\\AMD\\Chipset_IODrivers\\SFHI2C Driver/dpinst.exe", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\97.0.1072.76\\EBWebView\\x86/EmbeddedBrowserWebView.dll", "C:\\Program Files\\NVIDIA Corporation\\Installer2\\Display.PhysX.{189028F1-F590-48C1-9D81-FEE3D195CCFE}\\files\\Engine\\v2.8.0/NxCooking.dll", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0/Diagnostics.Format.ps1xml", "C:\\Windows\\INF\\PERFLIB\\0000/perfd.dat", "C:\\Program Files\\AdoptOpenJDK\\jdk8u192-b12\\demo\\management\\JTop/README.txt", "C:\\Windows\\SysWOW64\\IME\\IMEKR/imkrotip.dll", "C:\\Windows\\SystemResources\\Windows.UI.SettingsAdminFlowUIThreshold\\SystemSettingsThresholdAdminFlowUI\\Assets\\Fonts/SetMDL2.ttf", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\PhysX/PhysxExt.dll", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\BLENDS/BLENDS.ELM", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\SONORA/SONORA.ELM", "C:\\Windows\\Drivers\\Sound\\Realtek\\UWP\\CONFIG\\PIN\\run/AsusSetup.exe", "C:\\Windows\\Boot\\PCAT\\sl-SI/bootmgr.exe.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\on-finished/index.js", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\STUDIO/PREVIEW.GIF", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00F7\\AppInfo1\\zh_TW/701.scp", "C:\\Windows\\System32\\DriverStore\\FileRepository\\wpdmtphw.inf_amd64_1aae998f86058cec/wpdmtphw.inf", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Data.Services.Design\\v4.0_4.0.0.0__b77a5c561934e089/System.Data.Services.Design.dll", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\Smart Tag/FBIBLIO.DLL", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\configuration/config.ini", "C:\\Program Files\\Microsoft Office\\root\\Office16\\sdxs\\FA000000069/catalog.json", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\1031/cscompui.dll", "C:\\Windows\\SystemResources\\Windows.UI.ShellCommon\\pris/Windows.UI.ShellCommon.de-DE.pri", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_32\\PresentationCore\\v4.0_4.0.0.0__31bf3856ad364e35/GlobalMonospace.CompositeFont", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\kk/msipc.dll.mui", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\bsddb/__init__.py", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\THEMES16\\PROFILE/PREVIEW.GIF", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\PhysX\\files\\Engine\\4F8D3BB436C7/APEX_ParticlesCHECKED_x86.dll", "C:\\Windows\\SystemApps\\Microsoft.MicrosoftEdgeDevToolsClient_8wekyb3d8bbwe\\23\\dom\\DomTree/domTree.css", "C:\\Windows\\Microsoft.NET\\Framework64\\v2.0.50727\\ASP.NETWebAdminFiles\\App_LocalResources/default.aspx.resx", "C:\\Windows\\System32\\DriverStore\\FileRepository\\netr7364.inf_amd64_310ee0bc0af86ba3/netr7364.sys", "C:\\Windows\\SystemApps\\MicrosoftWindows.Client.CBS_cw5n1h2txyewy\\IrisService/IrisService.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.ValueTuple\\v4.0_4.0.0.0__cc7b13ffcd2ddd51/System.ValueTuple.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mshdc.inf_amd64_0d06b6638bdb4763/atapi.sys", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\zh_TW\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USBHUB Driver\\Win7\\x64/amdhub3.cat", "C:\\Windows\\System32\\DriverStore\\FileRepository\\brwfs17a.inf_amd64_d6bb0ed8e9dcf0fb/brwfs17a.cat", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_ProcessResource\\de-DE/MSFT_ProcessResource.strings.psd1", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\tr/msipc.dll.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_securitydevices.inf_amd64_f10a5650b96630b9/c_securitydevices.inf", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\webapps\\templates\\view/common-button-template.html", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\pl/701.plg", "C:\\Windows\\System32\\DriverStore\\FileRepository\\push2_display.inf_amd64_6c2b9846f800bbfd\\amd64/WinUSBCoInstaller2.dll", "C:\\Windows\\INF\\.NET CLR Networking/_Networkingperfcounters_v2.ini", "C:\\Windows\\SysWOW64\\InputMethod\\CHS/ChsIFEComp.dll", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\SYSTEM\\MSMAPI\\1031/MSMAPI32.DLL", "C:\\Program Files (x86)\\OpenOffice 4\\share\\basic\\Gimmicks/AutoText.xba", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\DirectAccessClientComponents/MSFT_DAClientExperienceConfiguration.cdxml", "C:\\Windows\\Microsoft.NET\\DirectX for Managed Code\\1.0.2902.0/Microsoft.DirectX.AudioVideoPlayback.xml", "C:\\Windows\\SystemApps\\Microsoft.AccountsControl_cw5n1h2txyewy/AccountsControlUI.dll", "C:\\Windows\\System32\\DriverStore\\FileRepository\\basicdisplay.inf_amd64_65ab9a260dbf7467/basicdisplay.inf", "C:\\Windows\\Speech_OneCore\\Engines\\SR\\de-DE-N/AI041031.am", "C:\\Program Files\\Microsoft Office\\root\\Office16\\ODBC Drivers\\Salesforce\\lib\\LibCurl64.DllA/libcurl64.dlla.manifest", "C:\\Program Files\\TeamViewer\\outlook/TeamViewerMeetingAddIn.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\path-to-regexp/package.json", "C:\\Program Files\\NVIDIA Corporation\\NVIDIA GeForce Experience\\cef\\share/MessageBusRouter.dll", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\Kds/Kds.psd1", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\NetLbfo/MSFT_NetLbfoTeam.cdxml", "C:\\Program Files (x86)\\Microsoft\\EdgeWebView\\Application\\97.0.1072.76\\Trust Protection Lists\\Sigma/Analytics", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\fi\\E6382097-F710-43b4-AB7D-F9C61F6A3FEE/String.def", "C:\\Windows\\System32\\DriverStore\\FileRepository\\eaphost.inf_amd64_d37080dfb66d830b/eaphost.inf", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\ASP.NETWebAdminFiles\\Security\\Users/editUser.aspx", "C:\\Windows\\SysWOW64\\IME\\IMETC/IMTCCFG.DLL", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.10.13.408\\IODriver\\Chipset_IODrivers\\USB3.0Hub Driver/amdhub30.cat", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00B5\\AppInfo1\\ru\\7fdc86bc-75a9-4ae6-b24e-d169fcfeac1c/String.def", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\sv\\DAEE9E18-F33F-484f-8AD4-CD4DD18C6BD5/String.def", "C:\\Windows\\Boot\\PCAT\\el-GR/memtest.exe.mui", "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\ASP.NETWebAdminFiles\\Security\\Permissions/managePermissions.aspx", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\com.jrockit.mc.feature.rcp.zh_CN_5.5.2.174165/feature.properties", "C:\\Program Files (x86)\\Microsoft\\EdgeCore\\97.0.1072.76/97.0.1072.76.manifest", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_GroupResource/MSFT_GroupResource.psm1", "C:\\Windows\\Tasks/DropboxUpdateTaskMachineCore.job", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\zh-CN/msipc.dll.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\ja/701.scp", "C:\\Windows\\System32\\DriverStore\\FileRepository\\bcmfn2.inf_amd64_5ebadf201c5b5845/bcmfn2.inf", "C:\\Windows\\System32\\DriverStore\\FileRepository\\e2xw10x64.inf_amd64_04c2ae40613a06ff/e2xw10x64.sys", "C:\\Program Files (x86)\\ASUS\\ArmouryDevice\\dll\\ShareFromArmouryIII\\Mouse\\ROG Strix Impact\\Resource_P303\\ASUS\\Button/btm_d.png", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CC\\AppInfo1\\sv/701.plg", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_64\\System.Transactions\\v4.0_4.0.0.0__b77a5c561934e089/System.Transactions.dll", "C:\\Program Files (x86)\\OpenOffice 4\\program\\python-core-2.7.18\\lib\\lib-tk/Canvas.py", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\InstallUtil.resources\\v4.0_4.0.0.0_de_b03f5f7f11d50a3a/InstallUtil.resources.dll", "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\ASP.NETWebAdminFiles\\App_GlobalResources/AppConfigCommon.resx", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\webapps\\scoobe\\js\\common/scoobe-knockout-helpers.js", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\zh_TW\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\de/701.plg", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\cookie-signature/package.json", "C:\\Program Files (x86)\\OpenOffice 4\\share\\basic\\Euro/Common.xba", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00DD\\AppInfo1\\ms/701.scp", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Web.ApplicationServices.resources\\v4.0_4.0.0.0_de_31bf3856ad364e35/System.Web.ApplicationServices.resources.dll", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\NVWMI/nvWmi.chm", "C:\\Windows\\Drivers\\VGA\\Nvidia\\27.21.14.5671\\Display.Driver\\NVCPL/ae77e77173194a49a821b5e77adec059_License1.xml", "C:\\Program Files\\ASUS\\ARMOURY CRATE Lite Service\\DeviceServicePlugIn/Load.conf", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\da/701.scp", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Reflection.Emit.Lightweight\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.Reflection.Emit.Lightweight.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\ro/701.plg", "C:\\Windows\\System32\\DriverStore\\FileRepository\\hidir.inf_amd64_7bf4a320e4ec8b3d/hidir.sys", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\ipaddr.js\\lib/ipaddr.js", "C:\\Program Files\\Java\\jdk1.8.0_211\\lib\\missioncontrol\\features\\org.eclipse.emf.ecore_2.10.1.v20140901-1043/epl-v10.html", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.Xml.Linq.resources\\v4.0_4.0.0.0_de_b77a5c561934e089/System.Xml.Linq.resources.dll", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model0148\\AppInfo1\\ja\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.PowerShell.Commands.Diagnostics\\v4.0_3.0.0.0__31bf3856ad364e35/Microsoft.PowerShell.Commands.Diagnostics.dll", "C:\\Program Files\\Windows Security\\BrowserCore/manifest.json", "C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\Config\\Browsers/chrome.browser", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.IO.UnmanagedMemoryStream\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.IO.UnmanagedMemoryStream.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Engine\\v2.8.1/PhysXCore.dll", "C:\\Windows\\Resources\\Themes\\aero/aerolite.msstyles", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmtkr.inf_amd64_a8a4ecec7082e1aa/mdmtkr.inf", "C:\\Program Files\\Android\\Android Studio/build.txt", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\qs\\test/index.js", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\ipaddr.js\\src/ipaddr.coffee", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00E6\\AppInfo1\\fr\\2e28993e-6cca-4181-835e-8432d37aac08/String.def", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Schemas\\PSMaml/baseConditional.xsd", "C:\\Windows\\System32\\DriverStore\\FileRepository\\net8187se64.inf_amd64_99a4ca261f585f17/RTL8187Se.sys", "C:\\Program Files\\WindowsPowerShell\\Modules\\PackageManagement\\1.0.0.1\\de/Microsoft.PackageManagement.resources.dll", "C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\ASP.NETWebAdminFiles/error.aspx", "C:\\Program Files\\PCHealthCheck\\ux\\resources\\sr-cyrl/license.html", "C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_WindowsOptionalFeature/MSFT_WindowsOptionalFeature.psm1", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_WaitForSome/MSFT_WaitForSome.schema.mof", "C:\\Windows\\System32\\DriverStore\\FileRepository\\mdmpin.inf_amd64_be5d923b5e701b62/mdmpin.inf", "C:\\Windows\\SysWOW64\\Kodak\\kds_i900/wia.dll", "C:\\Windows\\SystemApps\\Microsoft.BioEnrollment_cw5n1h2txyewy\\Fonts/BioMDL2.ttf", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application/delegatedWebFeatures.sccd", "C:\\Program Files (x86)\\MSBuild\\15.0\\FileTracker\\1042/FileTracker64UI.dll", "C:\\Program Files (x86)\\ASUS/file.idx", "C:\\Program Files (x86)\\Microsoft\\EdgeWebView\\Application\\97.0.1072.76\\EBWebView\\x86/EmbeddedBrowserWebView.dll", "C:\\Program Files\\NVIDIA Corporation\\FrameViewSDK\\licenses/LICENSES.txt", "C:\\Windows\\System32\\DriverStore\\FileRepository\\net8192se64.inf_amd64_167684f9283b4eca/net8192se64.inf", "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\Modules\\PSDesiredStateConfiguration\\DSCResources\\MSFT_EnvironmentResource\\de-DE/MSFT_EnvironmentResource.strings.psd1", "C:\\Program Files\\Microsoft Office\\root\\Office16\\sdxs\\FA000000049/catalog.json", "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\97.0.1072.76\\ResiliencyLinks\\Locales/am.pak.DATA", "C:\\Windows\\System32\\DriverStore\\FileRepository\\push2_display.inf_amd64_17bd6370a1dc5c74/push2_display.inf", "C:\\Program Files\\Microsoft Office\\root\\vfs\\ProgramFilesCommonX64\\Microsoft Shared\\DW/DBGCORE.DLL", "C:\\Windows\\SystemApps\\Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy\\data/oobeSections.json", "C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319/AddInProcess.exe", "C:\\Windows\\System32\\uk-UA/comctl32.dll.mui", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\ko/701.scp", "C:\\Windows\\System32\\DriverStore\\FileRepository\\ndextlag_lwf.inf_amd64_74752af70c6e7e55/ndextlag.sys", "C:\\Windows\\IME/SPTIP.DLL", "C:\\Windows\\Microsoft.NET\\Framework64\\v3.0\\Windows Communication Foundation\\de/Microsoft.Transactions.Bridge.Dtc.Resources.dll", "C:\\Windows\\System32\\hr-HR/comctl32.dll.mui", "C:\\Windows\\SystemApps\\Microsoft.XboxGameCallableUI_cw5n1h2txyewy/AppxBlockMap.xml", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00C2\\AppInfo1\\pt/701.scp", "C:\\Windows\\Drivers\\Chipset\\AMD\\2.07.14.327\\IODriver\\Chipset_IODrivers\\USB Filter Driver/dpinst64.exe", "C:\\Program Files\\Microsoft Office\\root\\Office16\\MSIPC\\no/msipc.dll.mui", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\socket.io-adapter\\node_modules\\debug/browser.js", "C:\\Program Files (x86)\\Epson Software\\Document Capture\\Resources\\Devices\\Model00CA\\AppInfo1\\cs/701.plg", "C:\\Program Files\\Common Files\\microsoft shared\\ink\\de-DE/InputPersonalization.exe.mui", "C:\\Windows\\System32\\DriverStore\\FileRepository\\athw8x.inf_amd64_55014eff4ceefbdf/athw8x.sys", "C:\\Windows\\System32\\DriverStore\\FileRepository\\c_keyboard.inf_amd64_56ea9763e933f7c5/c_keyboard.inf", "C:\\Program Files (x86)\\OpenOffice 4\\share\\config\\soffice.cfg\\modules\\sglobal\\statusbar/statusbar.xml", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.IO.IsolatedStorage\\v4.0_4.0.0.0__b03f5f7f11d50a3a/System.IO.IsolatedStorage.dll", "C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\System.ServiceModel.Channels.resources\\v4.0_4.0.0.0_de_31bf3856ad364e35/System.ServiceModel.Channels.resources.dll", "C:\\Program Files (x86)\\NVIDIA Corporation\\NvNode\\node_modules\\statuses/codes.json"];
const yo = {
        components: {
            McAfeeIcon: R
        },
        emits: ["onQuickScanCompleted", "onThreatDetected"],
        setup(p, {
            emit: n
        }) {
            const {
                t: r
            } = D(), o = f("Loading..."), t = f(0), a = f(!1), l = f(0), m = f(N.length), u = f(0), c = f(0), h = f(0), A = V(() => c.value > 0), x = [212, 455, 509, 709, 805], W = [{
                risk: "high",
                description: "Win32/Rbot",
                type: "Trojan"
            }, {
                risk: "medium",
                description: "Win32/Adware.SystemSecurity.AL",
                type: "Adware, Riskware"
            }, {
                risk: "high",
                description: "Win32/Sirefef.A",
                type: "Trojan"
            }, {
                risk: "high",
                description: "Win32/Spatet.A",
                type: "Trojan, Worm"
            }, {
                risk: "high",
                description: "HTML/Iframe.B.Gen",
                type: "Virus"
            }];
            let y;
            return k(() => {
                y = setInterval(() => {
                    if (t.value++, u.value++, x.indexOf(t.value) !== -1) {
                        const O = W[x.indexOf(t.value)];
                        n("onThreatDetected", {
                            filePath: N[t.value],
                            threat: O
                        }), c.value++
                    }
                    if (!N[t.value]) {
                        clearInterval(y), a.value = !0, l.value = 100, c.value = 5, n("onQuickScanCompleted", c.value);
                        return
                    }
                    l.value = 100 / N.length * t.value, o.value = N[t.value]
                }, 20)
            }), {
                currentFilePath: o,
                hasFoundVirus: A,
                isQuickScanDone: a,
                percentageProcessed: l,
                t: r,
                totalItems: m,
                totalItemsScanned: u,
                totalSecurityRisksDetected: c,
                totalSecurityRisksResolved: h
            }
        }
    },
    xo = {
        class: "z-10 absolute top-0 left-0 ml-6 mt-6 max-w-4xl w-full shadow-lg border border-neutral-400 shadow-neutral-900/30 bg-white text-neutral-700 overflow-hidden"
    },
    Do = {
        class: "relative z-10 p-4 flex items-center justify-between border-b border-neutral-200 bg-white"
    },
    bo = {
        class: "inline-flex items-center"
    },
    Fo = {
        class: "ml-4 font-medium"
    },
    Po = P('<div class="inline-flex items-center space-x-4"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>', 1),
    Mo = {
        class: "inline-flex items-center"
    },
    Ao = {
        key: 0,
        class: "animate-spin h-5 w-5",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    Wo = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    Io = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    Eo = [Wo, Io],
    ko = {
        key: 1,
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    },
    Ro = e("path", {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
    }, null, -1),
    No = [Ro],
    Oo = {
        class: "ml-4"
    },
    To = {
        key: 0
    },
    Bo = {
        key: 1
    },
    Lo = {
        class: "text-right text-xs"
    },
    Vo = {
        class: "max-w-xl w-full whitespace-nowrap truncate font-medium"
    },
    jo = {
        key: 0
    },
    Uo = {
        key: 1
    },
    Go = {
        class: "p-8"
    },
    zo = {
        class: "border border-neutral-200 text-xs min-h-[16rem]"
    },
    Ho = {
        class: "bg-neutral-100 py-1 px-2 font-medium border-b border-neutral-200"
    },
    Xo = {
        class: "border-b border-neutral-200 bg-neutral-50 py-1 px-2 grid grid-cols-2 gap-4"
    },
    qo = {
        class: "border-b border-neutral-200 bg-neutral-50 py-1 px-2 grid grid-cols-2 gap-4"
    },
    $o = {
        class: "text-red-600"
    },
    Qo = {
        class: "border-b border-neutral-200 bg-neutral-50 py-1 px-2 grid grid-cols-2 gap-4"
    },
    Jo = e("div", null, "0", -1),
    Ko = {
        class: "border-b border-neutral-200 bg-neutral-50 py-1 px-2 grid grid-cols-2 gap-4"
    },
    Yo = {
        class: "text-red-600"
    },
    Zo = {
        class: "mt-8 flex justify-between items-center"
    },
    es = {
        class: "inline-flex items-center"
    },
    os = e("div", {
        class: "ml-4 font-medium"
    }, "McAfee Total Protection", -1),
    ss = {
        class: "flex space-x-2"
    },
    is = {
        class: "min-w-[5rem] text-sm bg-neutral-200 py-2 px-4 text-neutral-400 rounded-sm"
    },
    ts = {
        class: "min-w-[5rem] text-sm bg-neutral-200 py-2 px-4 text-neutral-400 rounded-sm"
    };

function rs(p, n, r, o, t, a) {
    const l = _("McAfeeIcon");
    return i(), d("div", xo, [e("div", Do, [e("div", bo, [e("div", null, [S(l, {
        class: "h-5 w-5"
    })]), e("div", Fo, s(o.t("quickScan.quickScan")) + " - McAfee Total Protection", 1)]), Po]), S(M, {
        "enter-active-class": "animate__animated animate__slideInDown",
        "leave-active-class": "animate__animated animate__slideOutUp",
        mode: "out-in"
    }, {
        default: b(() => [e("div", {
            class: F(["p-4 flex justify-between", [!o.hasFoundVirus && "bg-gradient-to-b from-yellow-300 to-yellow-400", o.hasFoundVirus && "text-white bg-gradient-to-b from-red-600 to-red-700"]])
        }, [e("div", Mo, [o.isQuickScanDone ? (i(), d("svg", ko, No)) : (i(), d("svg", Ao, Eo)), e("div", Oo, [o.isQuickScanDone ? (i(), d("p", Bo, s(o.t("quickScan.scanComplete")), 1)) : (i(), d("p", To, s(o.t("quickScan.scanning")) + "...", 1))])]), e("div", Lo, [e("div", null, s(o.t("quickScan.scanningFiles")), 1), e("div", Vo, [o.isQuickScanDone ? (i(), d("span", Uo, s(o.t("quickScan.scanningFilesDone")), 1)) : (i(), d("span", jo, s(o.currentFilePath), 1))])])], 2)]),
        _: 1
    }), e("div", {
        class: F(["h-1", [!o.hasFoundVirus && "bg-neutral-100", o.hasFoundVirus && "bg-neutral-300"]])
    }, [e("div", {
        class: F(["h-1", [!o.hasFoundVirus && "bg-yellow-300", o.hasFoundVirus && "bg-red-500"]]),
        style: U(`width: ${o.percentageProcessed}%;`)
    }, null, 6)], 2), e("div", Go, [e("div", zo, [e("div", Ho, s(o.t("quickScan.resultsSummary")), 1), e("div", Xo, [e("div", null, "[+] " + s(o.t("quickScan.totalItemsScanned")), 1), e("div", null, s(o.totalItemsScanned) + "/" + s(o.totalItems), 1)]), e("div", qo, [e("div", null, "[+] " + s(o.t("quickScan.totalSecurityRisksDetected")), 1), e("div", $o, s(o.totalSecurityRisksDetected), 1)]), e("div", Qo, [e("div", null, "[+] " + s(o.t("quickScan.totalSecurityRisksResolved")), 1), Jo]), e("div", Ko, [e("div", null, s(o.t("quickScan.totalSecuritsRisksRequiringAttention")), 1), e("div", Yo, s(o.totalSecurityRisksDetected), 1)])]), e("div", Zo, [e("div", es, [e("div", null, [S(l, {
        class: "h-8 w-8"
    })]), os]), e("div", ss, [e("button", is, s(o.t("quickScan.pause")), 1), e("button", ts, s(o.t("quickScan.stop")), 1)])])])])
}
var ns = v(yo, [
    ["render", rs]
]);
const as = {
        components: {
            CheckIcon: q,
            DotsHorizontalIcon: $,
            McAfeeIcon: R,
            XIcon: Q
        },
        emits: ["onSystemCheckFailed"],
        setup(p, {
            emit: n
        }) {
            const {
                t: r
            } = D(), o = 40 * 2 * Math.PI, t = f("running"), a = f("waiting"), l = f("waiting"), m = f("waiting"), u = f("waiting"), c = f(0);
            return k(() => {
                const h = setInterval(() => {
                    c.value += Math.floor(Math.random() * 5), c.value >= 3 && (t.value = "success", a.value = "running"), c.value >= 9 && (a.value = "success", l.value = "running"), c.value >= 17 && (l.value = "success", m.value = "running"), c.value >= 39 && (m.value = "success", u.value = "running"), c.value >= 43 && (u.value = "failed", clearInterval(h), n("onSystemCheckFailed")), c.value >= 100 && (c.value = 100, clearInterval(h))
                }, 1e3)
            }), {
                circumference: o,
                percentage: c,
                step1Status: t,
                step2Status: a,
                step3Status: l,
                step4Status: m,
                step5Status: u,
                t: r
            }
        }
    },
    ls = {
        class: "z-20 absolute top-0 left-0 ml-[4.5rem] mt-[4.5rem] max-w-2xl w-full shadow-lg border border-neutral-400 shadow-neutral-900/30 bg-white text-neutral-700 overflow-hidden"
    },
    cs = {
        class: "relative z-10 p-4 flex items-center justify-between border-b border-neutral-200 bg-white"
    },
    ds = {
        class: "inline-flex items-center"
    },
    ms = e("div", {
        class: "ml-4 font-medium"
    }, "McAfee Total Protection", -1),
    fs = P('<div class="inline-flex items-center space-x-4"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>', 1),
    ps = {
        class: "bg-gradient-to-b from-red-600 to-red-700 text-white p-4 text-center"
    },
    us = {
        class: "p-8 flex items-center"
    },
    Cs = {
        class: "w-32 h-32 flex-shrink-0 relative inline-flex items-center justify-center overflow-hidden rounded-full"
    },
    _s = {
        class: "w-32 h-32 flex-shrink-0"
    },
    Ss = e("circle", {
        class: "text-neutral-300",
        "stroke-width": "10",
        stroke: "currentColor",
        fill: "transparent",
        r: "40",
        cx: "64",
        cy: "64"
    }, null, -1),
    ws = ["stroke-dasharray", "stroke-dashoffset"],
    gs = {
        class: "z-10 absolute inset-0 flex justify-center items-center text-neutral-700"
    },
    vs = {
        class: "ml-6 flex-1 space-y-2"
    },
    hs = {
        class: "flex items-center text-sm"
    },
    ys = {
        class: "flex-1"
    },
    xs = e("div", {
        class: "ml-2"
    }, "5", -1),
    Ds = {
        class: "ml-2"
    },
    bs = {
        key: 1,
        class: "animate-spin h-5 w-5 text-neutral-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    Fs = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    Ps = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    Ms = [Fs, Ps],
    As = {
        class: "flex items-center text-sm"
    },
    Ws = {
        class: "flex-1"
    },
    Is = e("div", {
        class: "ml-2"
    }, null, -1),
    Es = {
        class: "ml-2"
    },
    ks = {
        key: 1,
        class: "animate-spin h-5 w-5 text-neutral-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    Rs = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    Ns = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    Os = [Rs, Ns],
    Ts = {
        class: "flex items-center text-sm"
    },
    Bs = {
        class: "flex-1"
    },
    Ls = e("div", {
        class: "ml-2"
    }, null, -1),
    Vs = {
        class: "ml-2"
    },
    js = {
        key: 1,
        class: "animate-spin h-5 w-5 text-neutral-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    Us = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    Gs = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    zs = [Us, Gs],
    Hs = {
        class: "flex items-center text-sm"
    },
    Xs = {
        class: "flex-1"
    },
    qs = e("div", {
        class: "ml-2"
    }, null, -1),
    $s = {
        class: "ml-2"
    },
    Qs = {
        key: 1,
        class: "animate-spin h-5 w-5 text-neutral-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    Js = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    Ks = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    Ys = [Js, Ks],
    Zs = {
        class: "flex items-center text-sm"
    },
    ei = {
        class: "flex-1"
    },
    oi = {
        class: "ml-2"
    },
    si = {
        key: 0,
        class: "font-bold text-red-500"
    },
    ii = {
        class: "ml-2"
    },
    ti = {
        key: 1,
        class: "animate-spin h-5 w-5 text-neutral-500",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    },
    ri = e("circle", {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
    }, null, -1),
    ni = e("path", {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, null, -1),
    ai = [ri, ni];

function li(p, n, r, o, t, a) {
    const l = _("McAfeeIcon"),
        m = _("DotsHorizontalIcon"),
        u = _("CheckIcon"),
        c = _("XIcon");
    return i(), d("div", ls, [e("div", cs, [e("div", ds, [e("div", null, [S(l, {
        class: "h-5 w-5"
    })]), ms]), fs]), e("div", ps, s(o.t("systemCheck.title")), 1), e("div", us, [e("div", Cs, [(i(), d("svg", _s, [Ss, e("circle", {
        class: "text-red-600",
        "stroke-width": "10",
        "stroke-dasharray": o.circumference,
        "stroke-dashoffset": o.circumference - o.percentage / 100 * o.circumference,
        "stroke-linecap": "round",
        stroke: "currentColor",
        fill: "transparent",
        r: "40",
        cx: "64",
        cy: "64"
    }, null, 8, ws)])), e("div", gs, s(o.percentage) + "%", 1)]), e("div", vs, [e("div", hs, [e("div", ys, s(o.t("systemCheck.step1")), 1), xs, e("div", Ds, [o.step1Status === "waiting" ? (i(), C(m, {
        key: 0,
        class: "h-5 w-5 text-neutral-500"
    })) : o.step1Status === "running" ? (i(), d("svg", bs, Ms)) : o.step1Status === "success" ? (i(), C(u, {
        key: 2,
        class: "h-5 w-5 text-eucalyptus-500"
    })) : o.step1Status === "failed" ? (i(), C(c, {
        key: 3,
        class: "h-5 w-5 text-red-600"
    })) : w("", !0)])]), e("div", As, [e("div", Ws, s(o.t("systemCheck.step2")), 1), Is, e("div", Es, [o.step2Status === "waiting" ? (i(), C(m, {
        key: 0,
        class: "h-5 w-5 text-neutral-500"
    })) : o.step2Status === "running" ? (i(), d("svg", ks, Os)) : o.step2Status === "success" ? (i(), C(u, {
        key: 2,
        class: "h-5 w-5 text-eucalyptus-500"
    })) : o.step2Status === "failed" ? (i(), C(c, {
        key: 3,
        class: "h-5 w-5 text-red-600"
    })) : w("", !0)])]), e("div", Ts, [e("div", Bs, s(o.t("systemCheck.step3")), 1), Ls, e("div", Vs, [o.step3Status === "waiting" ? (i(), C(m, {
        key: 0,
        class: "h-5 w-5 text-neutral-500"
    })) : o.step3Status === "running" ? (i(), d("svg", js, zs)) : o.step3Status === "success" ? (i(), C(u, {
        key: 2,
        class: "h-5 w-5 text-eucalyptus-500"
    })) : o.step3Status === "failed" ? (i(), C(c, {
        key: 3,
        class: "h-5 w-5 text-red-600"
    })) : w("", !0)])]), e("div", Hs, [e("div", Xs, s(o.t("systemCheck.step4")), 1), qs, e("div", $s, [o.step4Status === "waiting" ? (i(), C(m, {
        key: 0,
        class: "h-5 w-5 text-neutral-500"
    })) : o.step4Status === "running" ? (i(), d("svg", Qs, Ys)) : o.step4Status === "success" ? (i(), C(u, {
        key: 2,
        class: "h-5 w-5 text-eucalyptus-500"
    })) : o.step4Status === "failed" ? (i(), C(c, {
        key: 3,
        class: "h-5 w-5 text-red-600"
    })) : w("", !0)])]), e("div", Zs, [e("div", ei, s(o.t("systemCheck.step5")), 1), e("div", oi, [o.step5Status === "failed" ? (i(), d("span", si, s(o.t("systemCheck.expired")), 1)) : w("", !0)]), e("div", ii, [o.step5Status === "waiting" ? (i(), C(m, {
        key: 0,
        class: "h-5 w-5 text-neutral-500"
    })) : o.step5Status === "running" ? (i(), d("svg", ti, ai)) : o.step5Status === "success" ? (i(), C(u, {
        key: 2,
        class: "h-5 w-5 text-eucalyptus-500"
    })) : o.step5Status === "failed" ? (i(), C(c, {
        key: 3,
        class: "h-5 w-5 text-red-600"
    })) : w("", !0)])])])])])
}
var ci = v(as, [
    ["render", li]
]);
const di = {
        props: {
            threat: {
                type: Object,
                required: !0
            }
        },
        emits: ["onShouldDisappear"],
        setup(p, {
            emit: n
        }) {
            const {
                t: r
            } = D();
            return k(() => {
                setTimeout(() => {
                    n("onShouldDisappear")
                }, 1e3 * 3)
            }), {
                t: r
            }
        }
    },
    mi = {
        class: "w-full shadow-lg border border-neutral-300 shadow-neutral-900/40 bg-white text-neutral-700 overflow-hidden text-xs"
    },
    fi = {
        class: "bg-gradient-to-b from-red-600 to-red-700 p-3 text-white"
    },
    pi = {
        class: "font-bold"
    },
    ui = {
        class: "p-3 space-y-2"
    },
    Ci = {
        class: "flex items-center"
    },
    _i = e("div", {
        class: "text-red-600"
    }, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, [e("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M4 6h16M4 12h16M4 18h16"
    })])], -1),
    Si = {
        class: "ml-2"
    },
    wi = {
        class: "text-base font-bold"
    },
    gi = {
        class: "flex"
    },
    vi = e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, [e("path", {
        d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
    })], -1),
    hi = {
        class: "ml-2"
    },
    yi = {
        class: "font-bold"
    },
    xi = {
        class: "flex"
    },
    Di = e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-5 w-5",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
        "clip-rule": "evenodd"
    })], -1),
    bi = {
        class: "ml-2"
    },
    Fi = {
        class: "font-bold"
    };

function Pi(p, n, r, o, t, a) {
    return i(), d("div", mi, [e("div", fi, [e("div", pi, s(o.t("threat.title")), 1), e("div", null, s(r.threat.description) + ", " + s(r.threat.type), 1)]), e("div", ui, [e("div", Ci, [_i, e("div", Si, [e("div", wi, [r.threat.risk === "medium" ? (i(), d(j, {
        key: 0
    }, [G(s(o.t("threat.mediumRisk")), 1)], 64)) : r.threat.risk === "high" ? (i(), d(j, {
        key: 1
    }, [G(s(o.t("threat.highRisk")), 1)], 64)) : w("", !0)])])]), e("div", gi, [vi, e("div", hi, [e("div", yi, s(o.t("threat.origin")), 1), e("div", null, s(o.t("threat.notAvailable")), 1)])]), e("div", xi, [Di, e("div", bi, [e("div", Fi, s(o.t("threat.activity")), 1), e("div", null, s(o.t("threat.threatActionsPerformed")) + ": 1", 1)])])])])
}
var Mi = v(di, [
    ["render", Pi]
]);
const Ai = {
        components: {
            IntroModal: he,
            McAfeeIcon: R,
            McAfeeIconBlank: z,
            OfferModal: ro,
            QuickScanCompleteModal: ho,
            QuickScanModal: ns,
            SystemCheckModal: ci,
            ThreatModal: Mi
        },
        setup() {
            const {
                locale: p,
                t: n
            } = D(), r = f([]), o = f(!1), t = f(!1), a = f(!1), l = f(!1), m = f(!1), u = f(0);
            let c = null;
            const h = (g = 957, I = 350, T = 100) => {
                    const E = c.createOscillator(),
                        B = c.createGain();
                    E.connect(B), E.frequency.value = g, E.type = "square", B.connect(c.destination), B.gain.value = T * .01, E.start(c.currentTime), E.stop(c.currentTime + I * .001)
                },
                A = g => {
                    a.value = !0, u.value = g
                },
                x = () => {
                    m.value = !0
                },
                W = () => {
                    document.documentElement.requestFullscreen(), c = new AudioContext, o.value = !1, setTimeout(() => {
                        l.value = !0
                    }, 1e3 * 2)
                },
                y = () => {
                    setTimeout(() => {
                        t.value = !0
                    }, 1e3 * 2)
                },
                O = g => {
                    h(), r.value.push(g.threat)
                },
                X = g => {
                    r.value = r.value.filter(I => I !== g)
                };
            return k(() => {
                const g = new URLSearchParams(window.location.search);
                if (g.has("l")) {
                    const I = ["de", "en"],
                        T = g.get("l");
                    p.value = I.indexOf(T) !== -1 ? T : "en"
                }
                o.value = !0
            }), {
                backgroundImage: ne,
                currentThreats: r,
                isIntroModalVisible: o,
                isOfferModalVisible: t,
                isQuickScanCompleteModalVisible: a,
                isQuickScanModalVisible: l,
                isSystemCheckModalVisible: m,
                onQuickScanCompleted: A,
                onStartMcAfeeButtonClicked: x,
                onStartQuickScanButtonClicked: W,
                onSystemCheckFailed: y,
                onThreatDetected: O,
                onThreatModalShouldDisappear: X,
                t: n
            }
        }
    },
    Wi = {
        class: "min-h-screen bg-neutral-900 text-white flex justify-center items-center leading-tight select-none bg-opacity-80"
    },
    Ii = {
        class: "absolute w-full top-0 left-0 text-white"
    },
    Ei = {
        class: "w-full p-4 bg-neutral-900 bg-opacity-50"
    },
    ki = {
        class: "inline-flex items-center opacity-50"
    },
    Ri = e("span", {
        class: "ml-2"
    }, "McAfee Total Protection", -1),
    Ni = {
        class: "z-10 absolute inset-0 flex justify-center items-center backdrop-filter backdrop-blur-[2px] bg-neutral-900/70"
    },
    Oi = {
        class: "relative w-full max-w-3xl"
    },
    Ti = {
        class: "p-4 flex items-center justify-between border-b border-neutral-200"
    },
    Bi = {
        class: "inline-flex items-center"
    },
    Li = e("div", {
        class: "ml-4 font-medium"
    }, "McAfee Total Protection", -1),
    Vi = P('<div class="inline-flex items-center space-x-4"><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>', 1),
    ji = {
        class: "bg-neutral-100 py-2 px-4 flex justify-end items-center space-x-4 text-xs"
    },
    Ui = {
        class: "inline-flex items-center"
    },
    Gi = e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-4 w-4",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
        "clip-rule": "evenodd"
    })], -1),
    zi = {
        class: "ml-1"
    },
    Hi = {
        class: "inline-flex items-center"
    },
    Xi = e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-4 w-4",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
        "clip-rule": "evenodd"
    })], -1),
    qi = {
        class: "ml-1"
    },
    $i = e("button", {
        class: "inline-flex items-center"
    }, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "h-4 w-4",
        viewBox: "0 0 20 20",
        fill: "currentColor"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd"
    })])], -1),
    Qi = {
        class: "p-4 min-h-[10rem] flex items-center justify-center"
    },
    Ji = e("div", null, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 376 376",
        style: {
            "enable-background": "new 0 0 376 376"
        },
        "xml:space": "preserve",
        class: "h-24 w-24 text-eucalyptus-500",
        fill: "currentColor"
    }, [e("path", {
        d: "M291 249.108c-8.284 0-15 6.716-15 15v3H30V102.659c.098-.198.389-.473.584-.551H150c8.284 0 15-6.716 15-15s-6.716-15-15-15H30.496C13.966 72.108 0 86.039 0 102.529v184.872c0 16.38 13.681 29.706 30.496 29.706H129v14.535c0 2.809-2.525 5.465-5.197 5.465H62.495c-8.544 0-15.495 6.52-15.495 14.535v5.465c0 8.131 7.096 15 15.495 15h182.186c8.304 0 15.318-6.869 15.318-15v-5.465c0-8.015-6.872-14.535-15.318-14.535h-61.308c-2.712 0-5.374-2.707-5.374-5.465v-14.535h97.712c16.701 0 30.288-13.326 30.288-29.706v-23.294c.001-8.283-6.715-14.999-14.999-14.999z"
    }), e("path", {
        d: "M370.041 28.844a6.334 6.334 0 0 0-3.181.866c-5.574 3.249-13.325 5.038-21.823 5.038-6.356 0-12.934-.953-19.548-2.832-14.67-4.168-27.218-20.413-31.342-25.751-1.115-1.444-2.902-2.272-4.902-2.272-1.895 0-3.593.795-4.655 2.182-4.106 5.351-16.602 21.633-31.412 25.842-6.613 1.879-13.232 2.832-19.673 2.832-8.2 0-15.741-1.63-21.234-4.59l-.133-.073c-.759-.419-2.171-1.201-3.979-1.201-2.287 0-6.158 1.525-6.158 7.241v91.142c0 26.015 22.107 48.165 40.653 62.165 18.977 14.325 41.198 25.106 46.347 25.106 4.536 0 27.186-11.48 45.468-25.085 18.947-14.1 41.532-36.334 41.532-62.186V35.114c-.001-3.575-2.562-6.27-5.96-6.27z"
    })])], -1),
    Ki = {
        class: "ml-12"
    },
    Yi = {
        class: "text-2xl text-eucalyptus-500 font-medium"
    },
    Zi = {
        class: "space-x-2 text-sm mt-2"
    },
    et = {
        class: "text-eucalyptus-500"
    },
    ot = {
        class: "space-x-2 text-sm"
    },
    st = {
        class: "text-red-600"
    },
    it = {
        class: "text-sky-500"
    },
    tt = {
        class: "space-x-2 text-sm"
    },
    rt = {
        class: "text-eucalyptus-500"
    },
    nt = {
        class: "text-sky-500"
    },
    at = {
        class: "grid grid-cols-4 gap-1 border-t-4 border-eucalyptus-500"
    },
    lt = {
        class: "flex flex-col items-center p-4"
    },
    ct = {
        class: "font-medium"
    },
    dt = e("div", {
        class: "h-12 w-12 inline-flex items-center justify-center my-6"
    }, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 376 376",
        style: {
            "enable-background": "new 0 0 376 376"
        },
        "xml:space": "preserve",
        class: "h-12 w-12 text-eucalyptus-500",
        fill: "currentColor"
    }, [e("path", {
        d: "M291 249.108c-8.284 0-15 6.716-15 15v3H30V102.659c.098-.198.389-.473.584-.551H150c8.284 0 15-6.716 15-15s-6.716-15-15-15H30.496C13.966 72.108 0 86.039 0 102.529v184.872c0 16.38 13.681 29.706 30.496 29.706H129v14.535c0 2.809-2.525 5.465-5.197 5.465H62.495c-8.544 0-15.495 6.52-15.495 14.535v5.465c0 8.131 7.096 15 15.495 15h182.186c8.304 0 15.318-6.869 15.318-15v-5.465c0-8.015-6.872-14.535-15.318-14.535h-61.308c-2.712 0-5.374-2.707-5.374-5.465v-14.535h97.712c16.701 0 30.288-13.326 30.288-29.706v-23.294c.001-8.283-6.715-14.999-14.999-14.999z"
    }), e("path", {
        d: "M370.041 28.844a6.334 6.334 0 0 0-3.181.866c-5.574 3.249-13.325 5.038-21.823 5.038-6.356 0-12.934-.953-19.548-2.832-14.67-4.168-27.218-20.413-31.342-25.751-1.115-1.444-2.902-2.272-4.902-2.272-1.895 0-3.593.795-4.655 2.182-4.106 5.351-16.602 21.633-31.412 25.842-6.613 1.879-13.232 2.832-19.673 2.832-8.2 0-15.741-1.63-21.234-4.59l-.133-.073c-.759-.419-2.171-1.201-3.979-1.201-2.287 0-6.158 1.525-6.158 7.241v91.142c0 26.015 22.107 48.165 40.653 62.165 18.977 14.325 41.198 25.106 46.347 25.106 4.536 0 27.186-11.48 45.468-25.085 18.947-14.1 41.532-36.334 41.532-62.186V35.114c-.001-3.575-2.562-6.27-5.96-6.27z"
    })])], -1),
    mt = {
        class: "text-eucalyptus-500"
    },
    ft = {
        class: "bg-neutral-100 flex flex-col items-center p-4"
    },
    pt = {
        class: "font-medium"
    },
    ut = e("div", {
        class: "h-12 w-12 inline-flex items-center justify-center my-6"
    }, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 488.152 488.152",
        style: {
            "enable-background": "new 0 0 488.152 488.152"
        },
        "xml:space": "preserve",
        class: "h-12 w-12 text-eucalyptus-500",
        fill: "currentColor"
    }, [e("path", {
        d: "M394.6 478.326c2.6 0 5.1-.6 6.8-1.4l6.5-2.8c5.3-2.3 10.7-4.6 16.2-7.4 20.2-10.6 35.7-23.4 47.2-39 10.2-13.5 15.8-27.9 16.4-42.9.5-10 .5-20.2.4-30v-44.4c0-8.6-5.2-14.4-14.1-15.6l-3.8-.5c-5.1-.6-9.9-1.2-14.4-2.2-16.7-3.7-32.7-11.2-50.6-23.7-2.8-2-5.9-4.2-10.5-4.2s-7.7 2.2-10.4 4.1c-23.9 16.5-45.4 24.8-67.6 26.1-5.8.3-15.6 2.8-15.6 16.5v22.2c0 15-.1 30 0 44.9 0 6 .7 12.3 2.3 19.3 3.4 15 11.3 28.6 24.2 41.8 15.9 16.1 35.8 28.5 61.5 38.2 1.9.7 3.7 1 5.5 1zm-70.9-105.1c-.1-13.3-.1-26.7 0-40v-16.8c23.7-2.4 46.4-11.4 71-28v84.7h70.9c-.1 3.5-.1 7-.3 10.5-.5 10.5-4.4 20.4-12 30.4-9.6 12.9-22.5 23.6-39.5 32.4-4.9 2.5-9.9 4.6-14.9 6.8-1.4.6-2.8 1.2-4.3 1.9v-82h-70.9v.1z"
    }), e("path", {
        d: "M136.1 288.826c-9.6 4.7-51.4 25.8-95.7 58.1-25.2 18.4-40.4 47.6-40.4 78.8v21.1c0 5.5 4.4 9.9 9.9 9.9h306.2c-1-1-2.1-1.9-3.1-2.9-15.7-16.1-25.4-33-29.7-51.8-1.9-8.5-2.8-16.2-2.8-23.8-.1-14.1-.1-28.4-.1-42.7l.1-24.5c0-6.9 1.5-13.1 4.3-18.4-3.2-1.7-5.7-2.9-7.3-3.7-1.3-.6-2.1-1.9-2.1-3.4v-82.1c10.3-6.9 17.1-18.6 17.1-31.9v-85.1c0-42.3-34.3-76.6-76.6-76.6h-18.4c-42.3 0-76.6 34.3-76.6 76.6v85.1c0 13.3 6.8 25 17.1 31.9v82c.1 1.5-.6 2.8-1.9 3.4z"
    })])], -1),
    Ct = {
        class: "text-eucalyptus-500"
    },
    _t = {
        class: "bg-neutral-100 flex flex-col items-center p-4"
    },
    St = {
        class: "font-medium"
    },
    wt = e("div", {
        class: "h-12 w-12 inline-flex items-center justify-center my-6"
    }, [e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        class: "h-12 w-12 text-eucalyptus-500",
        fill: "currentColor"
    }, [e("path", {
        "fill-rule": "evenodd",
        d: "m12.947 10.679.486 1.45.32.981C14.593 15.715 15 17.296 15 18a3 3 0 0 1-6 0c0-.788.512-2.677 1.567-5.872l.486-1.45c.307-.904 1.587-.904 1.894 0ZM12 3c5.523 0 10 4.477 10 10a9.957 9.957 0 0 1-1.685 5.558 1 1 0 1 1-1.662-1.113 8 8 0 1 0-13.305 0 1 1 0 1 1-1.663 1.113A9.957 9.957 0 0 1 2 13C2 7.477 6.477 3 12 3Zm0 11.199-.328 1.06-.227.772C11.15 17.06 11 17.728 11 18a1 1 0 0 0 2 0c0-.332-.224-1.256-.663-2.712L12 14.2Z"
    })])], -1),
    gt = {
        class: "text-eucalyptus-500"
    },
    vt = {
        class: "bg-neutral-100 flex flex-col items-center p-4"
    },
    ht = {
        class: "font-medium"
    },
    yt = {
        class: "h-12 w-12 inline-flex items-center justify-center my-6"
    },
    xt = {
        class: "text-eucalyptus-500"
    },
    Dt = {
        class: "p-4 border-t-2 border-neutral-100 text-sm"
    },
    bt = {
        class: "space-x-2"
    },
    Ft = {
        class: "uppercase"
    },
    Pt = {
        class: "text-eucalyptus-500"
    },
    Mt = {
        class: "absolute bottom-0 right-0 p-4 max-w-xs w-full z-20 space-y-2"
    };

function At(p, n, r, o, t, a) {
    const l = _("McAfeeIconBlank"),
        m = _("IntroModal"),
        u = _("QuickScanModal"),
        c = _("QuickScanCompleteModal"),
        h = _("SystemCheckModal"),
        A = _("OfferModal"),
        x = _("McAfeeIcon"),
        W = _("ThreatModal");
    return i(), d("div", {
        class: "min-h-screen w-full bg-cover",
        style: U({
            backgroundImage: `url(${o.backgroundImage})`
        })
    }, [e("div", Wi, [e("div", Ii, [e("div", Ei, [e("div", ki, [S(l, {
        class: "h-5 w-5"
    }), Ri])])]), J(e("div", Ni, [S(M, {
        "enter-active-class": "animate__animated animate__shakeX animate__faster",
        "leave-active-class": "animate__animated animate__zoomOut animate__faster"
    }, {
        default: b(() => [o.isIntroModalVisible ? (i(), C(m, {
            key: 0,
            onOnStartQuickScanButtonClicked: o.onStartQuickScanButtonClicked
        }, null, 8, ["onOnStartQuickScanButtonClicked"])) : w("", !0)]),
        _: 1
    })], 512), [
        [K, o.isIntroModalVisible]
    ]), e("div", Oi, [S(M, {
        "enter-active-class": "animate__animated animate__zoomIn animate__faster",
        "leave-active-class": "animate__animated animate__zoomOut animate__faster"
    }, {
        default: b(() => [o.isQuickScanModalVisible && !o.isOfferModalVisible ? (i(), C(u, {
            key: 0,
            onOnQuickScanCompleted: o.onQuickScanCompleted,
            onOnThreatDetected: o.onThreatDetected,
            class: F([(o.isQuickScanCompleteModalVisible || o.isSystemCheckModalVisible) && "blur-[2px]"])
        }, null, 8, ["onOnQuickScanCompleted", "onOnThreatDetected", "class"])) : w("", !0)]),
        _: 1
    }), S(M, {
        "enter-active-class": "animate__animated animate__shakeX animate__faster",
        "leave-active-class": "animate__animated animate__zoomOut animate__faster"
    }, {
        default: b(() => [o.isQuickScanCompleteModalVisible && !o.isOfferModalVisible ? (i(), C(c, {
            key: 0,
            onOnStartMcAfeeButtonClicked: o.onStartMcAfeeButtonClicked,
            class: F([o.isSystemCheckModalVisible && "blur-[2px]"])
        }, null, 8, ["onOnStartMcAfeeButtonClicked", "class"])) : w("", !0)]),
        _: 1
    }), S(M, {
        "enter-active-class": "animate__animated animate__zoomIn animate__faster",
        "leave-active-class": "animate__animated animate__zoomOut animate__faster"
    }, {
        default: b(() => [o.isSystemCheckModalVisible && !o.isOfferModalVisible ? (i(), C(h, {
            key: 0,
            onOnSystemCheckFailed: o.onSystemCheckFailed,
            class: F([o.isOfferModalVisible && "blur-[2px]"])
        }, null, 8, ["onOnSystemCheckFailed", "class"])) : w("", !0)]),
        _: 1
    }), S(M, {
        "enter-active-class": "animate__animated animate__shakeX animate__faster",
        "leave-active-class": "animate__animated animate__zoomOut animate__faster"
    }, {
        default: b(() => [o.isOfferModalVisible ? (i(), C(A, {
            key: 0
        })) : w("", !0)]),
        _: 1
    }), e("div", {
        class: F(["shadow-lg shadow-neutral-900/30 bg-white text-neutral-700 border border-neutral-400", [(o.isQuickScanModalVisible || o.isSystemCheckModalVisible) && !o.isOfferModalVisible && "blur-[2px]"]])
    }, [e("div", Ti, [e("div", Bi, [e("div", null, [S(x, {
        class: "h-5 w-5"
    })]), Li]), Vi]), e("div", ji, [e("button", Ui, [Gi, e("span", zi, s(o.t("start.settings")), 1)]), e("button", Hi, [Xi, e("span", qi, s(o.t("start.help")), 1)]), $i]), e("div", Qi, [Ji, e("div", Ki, [e("div", Yi, s(o.t("start.youAreProtected")), 1), e("div", Zi, [e("span", null, s(o.t("start.protectionUpdates")) + ":", 1), e("span", et, s(o.t("start.current")), 1)]), e("div", ot, [e("span", null, s(o.t("start.lastScan")) + ":", 1), e("span", st, s(o.t("start.notAvailable")), 1), e("span", it, s(o.t("start.quickScan")), 1)]), e("div", tt, [e("span", null, s(o.t("start.licensesUsed")) + ":", 1), e("span", rt, s(o.t("start.1of5")), 1), e("span", nt, s(o.t("start.installOnAnotherDevice")), 1)])])]), e("div", at, [e("div", lt, [e("div", ct, s(o.t("start.security")), 1), dt, e("div", mt, s(o.t("start.protected")), 1)]), e("div", ft, [e("div", pt, s(o.t("start.identity")), 1), ut, e("div", Ct, s(o.t("start.protected")), 1)]), e("div", _t, [e("div", St, s(o.t("start.performance")), 1), wt, e("div", gt, s(o.t("start.protected")), 1)]), e("div", vt, [e("div", ht, s(o.t("start.moreAboutAntivirus")), 1), e("div", yt, [S(x, {
        class: "h-12 w-12"
    })]), e("div", xt, s(o.t("start.moreProtection")), 1)])]), e("div", Dt, [e("div", bt, [e("span", Ft, s(o.t("start.subscriptionStatus")) + ":", 1), e("span", Pt, s(o.t("start.30daysRemaining")), 1)])])], 2)]), e("div", Mt, [S(Y, {
        "enter-active-class": "animate__animated animate__fadeIn animate__faster",
        "leave-active-class": "animate__animated animate__fadeOut animate__faster"
    }, {
        default: b(() => [(i(!0), d(j, null, Z(o.currentThreats, y => (i(), C(W, {
            key: y,
            threat: y,
            onOnShouldDisappear: O => o.onThreatModalShouldDisappear(y)
        }, null, 8, ["threat", "onOnShouldDisappear"]))), 128))]),
        _: 1
    })])])], 4)
}
var Wt = v(Ai, [
    ["render", At]
]);
const H = ee(Wt),
    It = oe({
        fallbackLocale: "en",
        datetimeFormats: {
            de: {
                short: {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                },
                long: {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !1
                }
            },
            en: {
                short: {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                },
                long: {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    weekday: "short",
                    hour: "numeric",
                    minute: "numeric"
                }
            }
        },
        legacy: !1,
        locale: "en",
        messages: re
    });
H.use(It);
H.mount("#app");