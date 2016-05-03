 <div className={winStyle['voice-wrap']}>
	<div className={winStyle['voice-left']}></div>
	<div className={winStyle['voice-content']}>
		<audio>
			<source src='http://www.w3schools.com/tags/horse.ogg' type="audio/ogg"/>
		</audio>
		<span claaName={winStyle['voice-red-point']}>&nbsp;</span>
	</div>         
</div>


.voice-content:before{
    content: '';
    width: 8px;
    height: 8px;
    background-color: #b2e281;
    position: absolute;
    left: -13px;
    top: 8px;
    border-top-left-radius: 3px;
    border-top: 6px solid #b2e281;
    border-left: 6px solid #b2e281;
    border-right: transparent;
    border-bottom: transparent;
    transform: rotate(-45deg);
}
.voice-content{
    display: inline-block;
    width: 110px;
    height: 30px;
    background-color: #b2e281;
    border-radius: 3px;
    position: relative;
    text-align: center;
    border-left: 6px solid #b2e281;
}

.voice-content span{
    width: 6px;
    height: 6px;
    color: #f9735b;
    border-radius: 50%;
    position: absolute;
    background-color: #f9735b;
    border: 1px solid #f9735b;
    left: 120px;
}
.voice-time{}