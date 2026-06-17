export interface TimezoneRegistryItem {
  canonical: string;       
  offset: string;         
  displayName: string;    
}


export const enterpriseTimezones: TimezoneRegistryItem[] = [
  // Negative Offsets (West)
  { canonical: "Etc/GMT+12", offset: "-12:00", displayName: "GMT -12:00 (Kwajalein)" },
  { canonical: "Pacific/Pago_Pago", offset: "-11:00", displayName: "SST -11:00 (Samoa / Midway)" },
  { canonical: "Pacific/Honolulu", offset: "-10:00", displayName: "HST -10:00 (Hawaii / Tahiti)" },
  { canonical: "America/Adak", offset: "-09:00", displayName: "HDT -09:00 (Taiohae)" },
  { canonical: "America/Anchorage", offset: "-09:00", displayName: "AKST -09:00 (Alaska Main)" },
  { canonical: "America/Los_Angeles", offset: "-08:00", displayName: "PST -08:00 (Pacific Time US)" },
  { canonical: "America/Tijuana", offset: "-08:00", displayName: "PST -08:00 (Baja California)" },
  { canonical: "America/Phoenix", offset: "-07:00", displayName: "MST -07:00 (Arizona / Phoenix)" },
  { canonical: "America/Denver", offset: "-06:00", displayName: "MDT -06:00 (Mountain Time US)" },
  { canonical: "America/Mexico_City", offset: "-06:00", displayName: "CST -06:00 (Central Mexico)" },
  { canonical: "America/Chicago", offset: "-05:00", displayName: "CDT -05:00 (Central Time US)" },
  { canonical: "America/Bogota", offset: "-05:00", displayName: "COT -05:00 (Bogota / Lima / Quito)" },
  { canonical: "America/New_York", offset: "-04:00", displayName: "EDT -04:00 (Eastern Time US)" },
  { canonical: "America/Caracas", offset: "-04:00", displayName: "VET -04:00 (Venezuela)" },
  { canonical: "America/Halifax", offset: "-03:00", displayName: "ADT -03:00 (Atlantic Time)" },
  { canonical: "America/Argentina/Buenos_Aires", offset: "-03:00", displayName: "ART -03:00 (Argentina Connect)" },
  { canonical: "America/Sao_Paulo", offset: "-03:00", displayName: "BRT -03:00 (Sao Paulo / Brasilia)" },
  { canonical: "America/Noronha", offset: "-02:00", displayName: "FNT -02:00 (Mid-Atlantic Islands)" },
  { canonical: "Atlantic/Azores", offset: "-01:00", displayName: "AZOT -01:00 (Azores / Cape Verde)" },

  // Base Meridian Baseline
  { canonical: "UTC", offset: "+00:00", displayName: "UTC +00:00 (Universal Time Coordinated)" },
  { canonical: "Europe/London", offset: "+01:00", displayName: "BST +01:00 (London / Dublin / Lisbon)" },

  // Positive Offsets (East)
  { canonical: "Europe/Berlin", offset: "+02:00", displayName: "CEST +02:00 (Germany / Paris / Rome)" },
  { canonical: "Africa/Cairo", offset: "+03:00", displayName: "EET +03:00 (Egypt / South Africa)" },
  { canonical: "Europe/Moscow", offset: "+03:00", displayName: "MSK +03:00 (Moscow Standard)" },
  { canonical: "Asia/Riyadh", offset: "+03:00", displayName: "AST +03:00 (Saudi Arabia / Kuwait)" },
  { canonical: "Asia/Tehran", offset: "+03:30", displayName: "IRST +03:30 (Iran)" },
  { canonical: "Asia/Dubai", offset: "+04:00", displayName: "GST +04:00 (UAE / Oman / Baku)" },
  { canonical: "Asia/Kabul", offset: "+04:30", displayName: "AFT +04:30 (Afghanistan)" },
  { canonical: "Asia/Tashkent", offset: "+05:00", displayName: "UZT +05:00 (Uzbekistan / Karachi)" },
  { canonical: "Asia/Kolkata", offset: "+05:30", displayName: "IST +05:30 (India Standard Connect)" },
  { canonical: "Asia/Kathmandu", offset: "+05:45", displayName: "NPT +05:45 (Nepal)" },
  { canonical: "Asia/Dhaka", offset: "+06:00", displayName: "BST +06:00 (Bangladesh / Almaty)" },
  { canonical: "Asia/Yangon", offset: "+06:30", displayName: "MMT +06:30 (Myanmar / Cocos)" },
  { canonical: "Asia/Bangkok", offset: "+07:00", displayName: "WIB +07:00 (Bangkok / Jakarta / Vietnam)" },
  { canonical: "Asia/Shanghai", offset: "+08:00", displayName: "CST +08:00 (Beijing / Singapore / Perth)" },
  { canonical: "Asia/Tokyo", offset: "+09:00", displayName: "JST +09:00 (Japan / Seoul)" },
  { canonical: "Australia/Darwin", offset: "+09:30", displayName: "ACST +09:30 (Northern Australia)" },
  { canonical: "Australia/Sydney", offset: "+10:00", displayName: "AEST +10:00 (Sydney / Melbourne)" },
  { canonical: "Pacific/Guadalcanal", offset: "+11:00", displayName: "SBT +11:00 (Solomon Islands)" },
  { canonical: "Pacific/Auckland", offset: "+12:00", displayName: "NZST +12:00 (New Zealand / Fiji)" },
];

export function formatToTargetTimezone(isoString: string, targetCanonical: string, currentLanguage: string = "en-US"): string {
  try {
    const dateInstance = new Date(isoString);
    if (isNaN(dateInstance.getTime())) return isoString;

    return new Intl.DateTimeFormat(currentLanguage, {
      timeZone: targetCanonical,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    }).format(dateInstance);
  } catch (error) {
    console.error(`Timezone Engine Fault: Failed to parse target zone alignment [${targetCanonical}]`, error);
    return isoString; 
  }
}