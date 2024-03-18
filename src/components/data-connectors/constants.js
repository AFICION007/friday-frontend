const dataConnectorsObj = {
	dataSourcesFiles: {
		title: "Connected Data Sources & Files",
		items: [
			{
				status: "connected",
				type: "database",
				name: "Product_Events_DB",
				value: "snowflake",
				image: "https://s3-alpha-sig.figma.com/img/6d7b/ffcf/60e6e5fa6802df411eebc8a63e107e1f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwZ7NAhRwldchzyjDtkZRDt-7WLB2R~chen0xl2ckGrqENvPV~XCaZBQhMZ1Go5qTgYk1aUyUiUSvUjOXu1bNijIH~oypOLhpAAR7Dq7LTb7DENLtoDqH~mXz1pbLCeAsJKyjBCiud5NNZW6d~AAlldVgOQm-344MxpCFE5H3M046QGprThX4yS25BchLC-1LfFqFVVpSPvewWUrrSXTTdzTBr2Cgm3vMnx9u59VZz2-FViY2cF2CjA8yLNhJoWj3e0mu1FkedZ5FRgWO1yUh5pVtrthN5X7mwyIEUu~hpmfW2EZBTZilWkUgMAsI0XDosHZjcOqHX-zsTmZUoQuEA__",
			},
			{
				status: "connected",
				type: "database",
				name: "Ecommerce_Store_Boat",
				value: "shopify",
				image: "https://s3-alpha-sig.figma.com/img/a84a/e088/082a1e14b98d9bc1f5ca24ac24e038dc?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ghsoxMrSOLtBthZjgxVI3xBcMXwo~KADyKd27RS-owdxZDT3uM5ykDCfE4WBJH0MenGqzw-DR8PNwmC9B0XPiiPOl43EcU1pB7WnumgqWqaoioVEu6exeRUJhE0e8r07nu84VnvqcfRwghZCDbENqXZOXE3pIMzQDnb~hOa0iIFpx-uWd1nmIhk5xsCyC9kHbODLoW4NrSpzsiD0tK6RbAEvm~J5eyd3lFxhnxIGsMdgBwHSX1gpK-ZfUhA1QaJAsdJaYMoP9I~LFxfaA3YhydjwmCz3C4tehfOAbwpWQC~OQqO~v5Dw3fgi1jEmzewoKUV6DhrT8XI4TYqk75Ht3w__",
			},
			{
				status: "connected",
				type: "file",
				name: "Customer Orders.xlxs",
				value: "excel",
				image: "https://s3-alpha-sig.figma.com/img/508f/ebbc/e17c41f05f38adc70f21c20a350bfab1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N~xfmUeCt25AJsQzDYyzKjF5ImSFWTIvtBAObKkz6D3wMN2CbKwqiz0trCXlher4OijihUirm~2yokTOyOO6qYExvLg7secc5FhyT8P4xyW58BXuMmM~jBmrlLXkQXJDjx4DdpXklSn~AW-lSCUIdL5h3CkgOIuPfFnmsK0x1V73tlWmX1JjARgx9e4u5M3VZkVfFJeB1r0Eq5A-j4gp5Z4ZAau9Zv~B68UT3xDo7LdDFVVOUJnp8tX3P8Mev~XQMZz-~drdzcw-mKPRd~QQNwmyVckKWJwVGh1tLO8hBbyndtTYNxn8ii9c3HdElquQgdcQ9w-xVojVZq0~R1xNEw__",
			},
		],
	},
	newDataSources: {
		title: "Connect a New Data Source",
		items: [
			{
				label: "Amazon Athena",
				image: "https://s3-alpha-sig.figma.com/img/095f/adcc/dd432d1e9a1072c1105db0638debc9c5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2Wc5y~oVL62NQvmVsDhR9rc6slgWfnYa45zJWvGE27P5iTXpnKfwvlTOo-W2tDNxzAEnewy4N0CyYmlx6fF7yLopMvbPREFSqYz5HXvYWFO0WjhRjMg4~jW7S4POs27xMMcYrJRSEPaRzhH23L53izGnGcbMIVi0mvSRTpMPfrvwtvred5lZyjCD0VEfcjOHqXY9JyGJn2jF1t30O7Dbq0Hv1jb~yKn2KoHvDaRf9VtSvuzU5vTjmdyiWkaYX2jmZXrNz7LNSmKC1IJI7Po8jsjeA6qgWu1~iTkPn3KeWgnjUkXyO-tWrswF9flZ7l0bHrm6IPG2l8Qh4xumRbZ9g__",
				value: "amazon_athena",
			},
			{
				label: "Amazon Redshift",
				image: "https://s3-alpha-sig.figma.com/img/b67c/d673/bf189c68e7d7221081e58405a3479b78?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HpYqOn2QjdgVwq7WOzSy-gIU~HHLur9K6e5T66meSg-Ka9iwB7e-LpsV6pLFzX1uX6z4gOLrun0YBC-7EVFRl6GrjPSBL8LDeEaYECfUFnKmhISXnUljJUnhweyC3gG4fw5qJs~zC36b6kJyUS01GlOAYVenTi56am~dWjbH143oC6xEZ9b6j92F6EGLj5g4h4WKwWRWwfpersp9-iiSxzcTQsjGFABBqFtwdPaaDhWTD3ECBjaQJtmlECJ~61DbMP~WuzAnHthhDK1ksVNlxZtUcfV~7Q1OwPXPdQwVfXtyq3VLM~yplkisWKWbuzD48-OxpGhYGSCthSvtztD7Fg__",
				value: "amazon_redshift",
			},
			{
				label: "BigQuery",
				image: "https://s3-alpha-sig.figma.com/img/2d13/dea6/815d34cfb5902ea9206b3ef55f493f71?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DiCRMIyfoMSC58Xv9nsjsPQK8-gmjkrZV9cq7dfnv1T42qXDflOLdnz30sV18tR~mzpfcfi-gZICAh1lqUstocVY2ioTaHHwAc7e-Mor0LZsxwFCA1Ck8qXrmUmZkq~3ktK4nCytxd082~x3fmHSRPqZiBefUZm-EMnMGKmxsmO9cMKjtkj62VaClLBzn~DYUxNVLQ28~k6dpSYQn2LKSMz80TRIn~6~YtogJXm1VT7g5aG~4dRdKJ99nKfHlAXuJD1cS7RQOFasHrVHZFjtnb6YVQxndxj~yxlyYqvPI8AeUNGsoO-PzFSsyZwGckMYvamJBxshn-iTs6McDqACFw__",
				value: "bigquery",
			},
			// {
			// 	label: "BigQuery (Deprecated Driver)",
			// 	image: "",
			// 	value: "bigquery_deprecated",
			// },
			{
				label: "Druid",
				image: "https://s3-alpha-sig.figma.com/img/9d0f/b52f/b3421aa0f443b7e47df6bce0e93d5302?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISFse-H7JJvIcq41KwyW4v6pNmXJLl2jZ-ZVaaGevlTGDcmo5JwbFN~Gn40pISdZqDNrCuOoY~7cP6uRC0h9IYxV5rpIAwmBoIVHRImkbZHTTpIYGqFHQhVtOZcQhHKai4dYoSaeUNWtXWePeM1xFsAxO6~3T40gYvzraJKh2XbRwlRozb8ABiIcWq7nna3a7cAS1KYRX4bE3L~roZVQuE39qxtxoGBRyNyW~v8fM6-wCVJyEIOMZkitME9sPmUdBkO2Qc1TKkJ7iZyyp1-I5u-4SoSFt5s5r2~2Bo6Fe32rO63IpqaBBEdk0PgNwzJUOhufIRJmqa3VWLmqg9Ypiw__",
				value: "druid",
			},
			// {
			// 	label: "Google Analytics (Deprecated driver)",
			// 	image: "",
			// 	value: "google_analytics_deprecated",
			// },
			{
				label: "MongoDB",
				image: "https://s3-alpha-sig.figma.com/img/9e48/5704/6b5e4855caf382ee69dc0d5c60d53bb4?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0tDdCWfxa0qq3egKLXU~l6kyXYB9TxyL37MC5~Oi68JiqeeZ8CbojWOV3AM29-aDsXT~TTkBh~wgaIog8oMUQkM2sDP~ZfglpFLGwdeUlgu3vPvUeyug5d1-r5ALWbvx-JbVO8bMhhTl-j7I5gcjfGMRF61miQT6v~ceBuXmGJHi3aQNYUArdT0vRqte7l9LK~u00dnByZSaAxlxnfrDB6fyNwbbSrltNACXtiMqtgQhIsBVlHnbi2zEOeU9eZB-JxF4O2m~dqP2J0kM90-vx4RIyAYEDh7mho2SL7T5vRjK4eAWmsY4BAkzwAh0hc3jZkiYbWfF0rcPSEvusI7Iw__",
				value: "mongodb",
			},
			{
				label: "MySQL",
				image: "https://s3-alpha-sig.figma.com/img/45c3/73f3/8df646ed758b5525a133772ce6316caa?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQHbJ3~O3aJGJi0k1ESuGFCD7UIJUlXBkxVsDJqoT68ASeP5N1GTgMpS8A6fMZX6h2MRE14wgZvsFW4UQjQsUhHtPAlwTefszrc5MmOL~EbYaD9YFUBEj2F3bdlgjqW7he8rfvmTm427IUsnAAKpJ7LtIDPEf6R~ZvArCrkWiuGB3W0OtMYsvOKFdnCaY8RayI3ztDSiXLDaYg3e8ZjOJYUNZfVVeJnBHne2~AxuFTNkhrG3Z3lEuk6IyMZia4w~6PBKxwL3WARBGAsPnhoF5Km8ew2SQbHCVmwqZGg66TZVZBPHZAlIILNPTQzCGc65woyh00FciLQp1TJs2kR-3g__",
				value: "mysql",
			},
			{
				label: "PostgreSQL",
				image: "https://s3-alpha-sig.figma.com/img/d4ce/ba8b/5c8e24b6da0f00b86c39ff9128b19386?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcHJOItDWkL2svUI6beeySiE9Wmogke1qgQbGz-nBz~uqgYlSSxjftBRWeMfEuOC-9XBe-m4iQwXTSVnBZN~0bG7eS~eHJHzEzw6Mqnsbgy~yECintNUYqSDkk7Vv00ho486-90HPcIDga7I~i9UPCrJAVYWuvbBmK4uXX6fvFUOZui8UGaRyf2kVmZTnvNGpb4C1DZNlkewicUj8RHaaAhXahsykI7ujag7re7Aq0NB4XkcXGqT7OyJDTZHw3vY7VTQmbREfYRYaMM7xqX0G1lFJ3-4ZLTJKC~b6EC0iNBYprKldCK8eC4q~E3nk6BO7Ku18lXB8C4ry4a~HzV5yg__",
				value: "postgresql",
			},
			{
				label: "Presto",
				image: "https://s3-alpha-sig.figma.com/img/7317/e77f/d80d7cf2a85c815c4e5efb8da369b0c2?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lsUdB9ZLsPuhxKqUC5r1cbNvuV6-jQDwYIfvU0hkXhv4I6YuAUNDX939GAA2vPFdnPkVXXT7USDMrMSYRfkIVavOBSBaxjEc347fTvFqkE6J53ew9FtTudDxbWgUV9ErSawlGAT6fFgvBc2yBMkrE0DWeiCVHWQKF-OanenI8dF1nZHjpW5u46MWCWuxFdEM1bU96Ax8QyL3czFQVUTEI-47QGBaoGYR2ZDGaRyDaFcHHsrrQb5sq7dLy9B5-4MiuzpgMOHtvdJYTPUqvV2OI4GGVTB4rksqVzd9NWUxn1wDU7XuaT094ckvVSluJ3i8P-4qXWDl-6SlaiV2tJyXJg__",
				value: "presto",
			},
			{
				label: "Snowflake",
				image: "https://s3-alpha-sig.figma.com/img/6d7b/ffcf/60e6e5fa6802df411eebc8a63e107e1f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwZ7NAhRwldchzyjDtkZRDt-7WLB2R~chen0xl2ckGrqENvPV~XCaZBQhMZ1Go5qTgYk1aUyUiUSvUjOXu1bNijIH~oypOLhpAAR7Dq7LTb7DENLtoDqH~mXz1pbLCeAsJKyjBCiud5NNZW6d~AAlldVgOQm-344MxpCFE5H3M046QGprThX4yS25BchLC-1LfFqFVVpSPvewWUrrSXTTdzTBr2Cgm3vMnx9u59VZz2-FViY2cF2CjA8yLNhJoWj3e0mu1FkedZ5FRgWO1yUh5pVtrthN5X7mwyIEUu~hpmfW2EZBTZilWkUgMAsI0XDosHZjcOqHX-zsTmZUoQuEA__",
				value: "snowflake",
			},
			{
				label: "Spark SQL",
				image: "https://s3-alpha-sig.figma.com/img/1cb1/788f/7e5139c73adb3cbe468f6e1a7c01d972?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bX0bOXwVV3-eirzq9HCVNFxd49QD-gamwkxj-CE8Le4JqBQFtDc6ZgI3E-Imr1MazMFAR1EU~u-GUCaWSxPHYP7XIymk5UJDiSVXnAemo3xU5eGMhHGng9UeqLrxb7LiZZnq2UyLWihFc4KsMGUNVLsDa6dQlqD~ZNnDSjyB8gcOnt~5xKAv8XVEfLMvcQnQicRybLDKSimhLHNFCErA6FHanWlxN1dNmPqxo5gdNh7kGNmprSXZEHSkRl3a-M6-xLzX7E4vAQpmJOQ1Bta7q-d3wtHu5ZeN4RA~9MYeHWi7K5lzfopyYqCFmNEgbQJmxqlfkbYNMZ~P8IsZ2BKivQ__",
				value: "spark_sql",
			},
			{
				label: "SQL Server",
				image: "https://s3-alpha-sig.figma.com/img/9ee0/02e4/8189532653fb94acc66e40f5e759f47a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOXzuE-I-47BuIp-flH6xl0B3~hiO1JMz79Kw-ZRg7vk9~Gx32YkGVokAuqjUGhH45CWUJ1hMpPuov7TwT0JQJHf-~4mTelEyjvdexRWVOH1T6igUFf7FN8hRpDyip3r-Nuj3794TuBSDWPu~~BJHSLV2O6B28a43nFY0zT8IlOif7-ojP7j5ANd-PezR~YQYGpCrECEoTZZzX4iZYFMLzMU1rW-G03vJupc6kEfl-gsN51x81AYSPMHAjajp-vtPVYoaeUffsBiwN17ifMUW9nWev5q72BreFok7FKr4TCLK-yVqK~DAUtm7yAT64Tp1tTXPM9qIO~rah-ePuhUdw__",
				value: "sql_server",
			},
			{
				label: "SQLite",
				image: "https://s3-alpha-sig.figma.com/img/1f31/76a1/da776da04bcc69aaadc92ba06cf5100a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9tm9cs-er2o0Tc-SWyAwcfKIDm6ocYLbihcLFHCTQV1E7eYRC3JNxDPqQM2mbMSgf~fcDhG77Y9bglumhiDRyj44DTT9qH04Lyd6f9xvkO~ryhPDu1muKHlhi0YFGxeGGPtVaTrthzgZ-VJvHIR64OACeFVHb2FvFagqKnZrr2eOYmctKbr9nMa-IfqK1OESpi-jBxbw0ly6vTG~t4LK~cdr1oPt9WezatjmJvT-XCiT0u7JBjpuhh0nbpPgl~qI~LwpPFFGgnG~RrV1b-NZg4aPiR0H-Niq6bh9unw~Tl35rgJpnPnYKfpfHTMp8dwp75vAWqdY3ajuhc97Yd7hw__",
				value: "sqlite",
			},
		],
	},
};

export default dataConnectorsObj;
