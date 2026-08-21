
interface MapArr{
	// インデックスの key は string、値も string
	[index:string]:string
}

let Color: MapArr = {
	"White-白": "255,255,255",
	"Black-黒": "0,0,0",
	"Red-赤": "255,0,0",
	"Blue-青": "0,0,255",
	"Yellow-黄": "255,255,0",
	"Green-緑": "0,255,0",
	"Orange-オレンジ": "255,165,0",
	"Pink-ピンク": "255,192,203",
	"Purple-紫": "160,32,240",
	"Gray-グレー": "128,128,128",
	"Brown-茶色": "165,42,42",
	"Teal-青緑": "0,128,128",
	"Olive-オリーブ": "128,128,0",
	"Maroon-マルーン": "128,0,0",
	"Coral-珊瑚色": "255,127,80",
	"Salmon-サーモン": "250,128,114",
	"Turquoise-ターコイズ": "64,224,208",
	"Violet-スミレ色": "238,130,238",
	"Indigo-藍色": "75,0,130",
	"Gold-金色": "255,215,0",
	"Silver-銀色": "192,192,192",
	"Plum-プラム": "221,160,221",
	"Khaki-カーキ": "240,230,140",
	"Peach-桃色": "255,218,185",
	"Mint-ミント": "189,252,201",
	"Lavender-ラベンダー": "230,230,250",
	"Beige-ベージュ": "245,222,179",
	"Tan-タン": "210,180,140",
	"Slate-スレート": "112,128,144",
	"Crimson-クリムゾン": "220,20,60",
	"Chartreuse-シャルトリューズ": "127,255,0",
	"Fuchsia-フクシア": "255,0,255",
	"Azure-空色": "0,127,255",

};



export default (color:string)=>{
	return Color[color];
}


export const getColorList = ()=>{
	return Object.keys(Color);
}

export interface ColorEntry {
	name: string;   // 辞書の key (例: "White-白")
	rgb: string;    // "R,G,B"
	hex: string;    // "#rrggbb"
}

export const getColorEntries = (): ColorEntry[] => {
	return Object.keys(Color).map((name) => {
		const rgb = Color[name];
		const [r, g, b] = rgb.split(',').map((s) => Number(s.trim()) || 0);
		const hex = '#' + [r, g, b].map((n) => {
			const v = Math.max(0, Math.min(255, n));
			return v.toString(16).padStart(2, '0');
		}).join('');
		return { name, rgb, hex };
	});
};
