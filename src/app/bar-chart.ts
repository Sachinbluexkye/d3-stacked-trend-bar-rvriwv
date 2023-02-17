import {Component, Input, ElementRef, OnChanges, SimpleChanges, SimpleChange} from "@angular/core";
import * as d3 from 'd3';

interface StackedChart{
	one: number,
	two: number,
	three: number,
	four: number
}

@Component({
	selector: 'bar-stacked',
	templateUrl: './bar-chart.html'
})

export class StackedChartCompoent {
	@Input() data: StackedChart[];

	private w: number = 600;
	private h: number = 400;
	private margin = {top: 10, right: 50, bottom: 80, left: 50};
	private width = this.w - this.margin.left - this.margin.right;
	private height = this.h - this.margin.top - this.margin.bottom;

	private x: any;
	private y: any;
	private svg: any;
	private g: any;
	private stack: any;
	private chart: any;
	private layersBarArea: any;
	private layersBar: any;
	private xAxis: any;
	private yAxis: any;
	private legend: any;
	private legendItems: any;
	private tooltip: any;
	private stackedSeries: any;
	
	private colors = ['red', 'blue', 'yellow', 'green', 'brown'];

	constructor(private container: ElementRef){

	}

	ngOnInit() {
		this.stack = d3.stack()
			.keys(['one','two','three', 'four'])

		this.initScales();
		this.initSvg();
		this.createStack(this.data);
		this.drawAxis();
	}

	private initScales(){
		this.x = d3.scaleBand()
			.rangeRound([0, this.width])
			.padding(0.05);

		this.y = d3.scaleLinear()
			.range([this.height, 0])
	}

	private initSvg() {
	  
	  this.tooltip = d3.select('body').append("div")
			.classed('chart-tooltip', true)
			.style('display', 'none');

		this.svg = d3.select(this.container.nativeElement)
			.select('.chart-container')
			.append('svg')
			.attr("preserveAspectRatio", "xMinYMin meet")
			.attr('class', 'chart')
			.attr("viewBox", "0 0 600 400");

		this.chart = this.svg.append('g')
			.classed('chart-contents', true)
			.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

		this.layersBarArea = this.chart.append('g')
			.classed('layers', true);
	}

	private drawAxis(){
		this.xAxis = this.chart.append('g')
			.classed('x-axis', true)
			.attr("transform", "translate(0," + this.height + ")")
			.call(d3.axisBottom(this.x))

		this.yAxis = this.chart.append('g')
			.classed('y-axis', true)
			.call(d3.axisLeft(this.y));

	}

	private createStack(stackData:any){
		this.stackedSeries = this.stack(stackData);
		this.drawChart(this.stackedSeries)
	}

	private drawChart(data:any){
		this.layersBar = this.layersBarArea.selectAll('.layer')
		  .append('rect')
			.data(data)
			.enter()
			.append('g')
			.classed('layer', true)
			.style('fill', (d:any,i:any)=>{
				return this.colors[i]
			});

		this.x.domain(this.data.map((d:any)=>{
			return d.date
		}));
		
		this.y.domain([0, +d3.max(this.stackedSeries, function(d:any){
			return d3.max(d, (d:any)=>{
				return d[1]
			})
		})]);

		this.layersBar.selectAll('rect')
			.data((d:any)=>{
				return d;
			})
			.enter()
			.append('rect')
			.attr('y', (d:any)=>{
				return this.y(d[1])
			})
			
			.attr('width', this.x.bandwidth())

      .attr('x', (d:any, i:any)=>{
				return this.x(d.data.date);
			})
		  
			.attr('height', (d:any, i:any)=>{
				return this.y(d[0]) - this.y(d[1]);
			})
				
	}
}