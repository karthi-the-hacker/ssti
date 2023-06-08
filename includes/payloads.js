#!/usr/bin/env node

/**
 * SSTI
 * SSTI Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */

exports.payloads = [
	
	"ssti{{456*456}}" ,
	"ssti${20736+36}",
	"ssti${456*456-0}",
	"ssti<%={{456 * 456}}%>",
	"ssti<% 456 * 456 %>",
	"ssti{{456*'456'}}" ,
	"ssti<%= 456 * 456 %>" ,
	"ssti${456*456}" ,
	"ssti{{20736+36}}",
	"ssti${{456*456}}" ,
	"ssti@(20736+36)" ,
	"ssti#{456*456}" ,
	"ssti#{ 456 * 456 }" ,
	"ssti*{456*456}" ,
	"{{456*456}}" ,
	"{{20736+36}}",
	"${20736+36}",
	"{{456*'456'}}" ,
	"${456*456-456}",
	"<%={{456 * 456}}%>",
	"<% 456 * 456 %>",
	"<%= 456 * 456 %>" ,
	"${456*456}" ,
	"${{456*456}}" ,
	"@(20736+36)" ,
	"#{456*456}" ,
	"#{ 456 * 456 }" ,
	"*{456*456}" 

	]