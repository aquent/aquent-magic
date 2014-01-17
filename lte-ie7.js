/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Aquent-Magic\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-aquent-large' : '&#x2648;',
			'icon-aquent-small' : '&#x2649;',
			'icon-vt' : '&#x264a;',
			'icon-vt-drop-t' : '&#x2640;',
			'icon-vt-teardrop' : '&#x263f;',
			'icon-firebrand-large' : '&#x264c;',
			'icon-firebrand-small' : '&#x264d;',
			'icon-talent-ignition' : '&#x2634;',
			'icon-gymnasium' : '&#x264b;',
			'icon-ama' : '&#x264e;',
			'icon-tweet' : '&#x264f;',
			'icon-linkedin' : '&#x2653;',
			'icon-facebook' : '&#x2650;',
			'icon-google-plus' : '&#x2651;',
			'icon-google-plus-2' : '&#x2632;',
			'icon-google-plus-3' : '&#x2633;',
			'icon-pinterest' : '&#x2652;',
			'icon-youtube-2' : '&#x2631;',
			'icon-youtube-1' : '&#x2630;',
			'icon-flickr-1' : '&#x2636;',
			'icon-flickr-2' : '&#x2638;',
			'icon-meetup-1' : '&#x263c;',
			'icon-meetup-2' : '&#x263d;',
			'icon-viadeo' : '&#x2637;',
			'icon-xing' : '&#x2639;',
			'icon-rss' : '&#x263a;',
			'icon-plaxo' : '&#x263b;',
			'icon-lock' : '&#x1f512;',
			'icon-lock-2' : '&#x2635;',
			'icon-email-2' : '&#x263e;',
			'icon-email' : '&#x2709;',
			'icon-magnifier' : '&#x2315;',
			'icon-select-down' : '&#x2193;',
			'icon-select-right' : '&#x2192;',
			'icon-select-up' : '&#x2191;',
			'icon-select-left' : '&#x2190;',
			'icon-down-arrow' : '&#x261f;',
			'icon-right-arrow' : '&#x261e;',
			'icon-up-arrow' : '&#x261d;',
			'icon-left-arrow' : '&#x261c;',
			'icon-play-2' : '&#x25b6;',
			'icon-play' : '&#x25b7;',
			'icon-star' : '&#x2605;',
			'icon-download' : '&#x26c0;',
			'icon-document' : '&#x26c1;',
			'icon-uie' : '&#x274b;',
			'icon-caret-up' : '&#x21e7;',
			'icon-caret-right' : '&#x21e8;',
			'icon-caret-down' : '&#x21e9;',
			'icon-caret-left' : '&#x21e6;',
			'icon-caret-2-up' : '&#x2740;',
			'icon-caret-2-right' : '&#x2741;',
			'icon-caret-2-down' : '&#x2742;',
			'icon-caret-2-left' : '&#x2743;',
			'icon-caret-2-inverse-right' : '&#x2744;',
			'icon-caret-2-inverse-left' : '&#x2745;',
			'icon-caret-2-outline-right' : '&#x2746;',
			'icon-caret-2-outline-left' : '&#x2747;',
			'icon-close' : '&#x274c;',
			'icon-close-box' : '&#x22a0;',
			'icon-close-2' : '&#x2748;',
			'icon-close-2-inverse' : '&#x2749;',
			'icon-close-2-outline' : '&#x274a;',
			'icon-badge-25lbs' : '&#x2750;',
			'icon-badge-briefcase' : '&#x2751;',
			'icon-badge-calendar' : '&#x2752;',
			'icon-badge-speech-bubble' : '&#x2753;',
			'icon-badge-star' : '&#x2754;',
			'icon-badge-webcast' : '&#x2755;',
			'icon-badge-vitamail' : '&#x2756;',
			'icon-badge-medal' : '&#x2759;',
			'icon-badge-cursor' : '&#x275a;',
			'icon-badge-newsletter' : '&#x2757;',
			'icon-badge-trends' : '&#x2758;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};