#!/bin/bash
echo "Welcome to Math Calculator. Please select these options below"
echo "Triangular number.To select, press T,t or 1"
echo "Nonnegative odd numbers in succesion. To select, press P,p or 2"
echo "Quadratics sequences. To select, press Q,q or 3"
echo "To end the system press E,e or 4"
read option

if [[ $option == "T" ]] || [[ $option  == "t" ]] || (( $option == 1 ));
then
 	echo "Triangular number option"
	echo "Input a number"
	read MAX #input maximum number
	let LOOP=1
	let NUM=0
	let EVEN=0
	let ODD=0
	while [ $NUM -le $MAX ] #Start using loop to calculate
	do  
			NUM=$((NUM + LOOP))
			checking=$((NUM%2)) #Checking if even or odd number
			if [ $checking -eq 0 ] #using conditional command to check
			then
					if [ $NUM -le $MAX ] 
					then 
							EVEN=$((EVEN + 1))
					fi
					LOOP=$(($LOOP + 1))
			else
					if [ $NUM -le $MAX ] #Checking again if the number is over or not
					then
							ODD=$((ODD+1))
							echo $NUM #Printing the odd triangle number if the condition is met
					fi
					LOOP=$((LOOP+1))
			fi
	done
	echo "There were $ODD odd and $EVEN even Triangle numbers"



#Checking condition for task 2
elif [[ $option == "P" ]] || [[ $option == "p" ]] || (( $option == 2 )); 
then
	echo "Nonegative odd number option"
	echo "Please input your  value to factor"
	read VAL1
	for i in $( seq 1 $VAL1  )
	do
			((NEW_VAL=$VAL1%$i))
			if (( $NEW_VAL == 0 ))
			then    
					echo "This number $VAL1 is factor of $i"
			fi
	done

	
#Checking condition for task 3
elif [[ $option == "Q" ]] || [[ $option == "q" ]] || [[ $option -eq 3 ]]; 
then
	#Starting here
	echo "Quardratiic sequences"
	echo "Enter number A"
	read A 
	echo "Enter number B"
	read B 
	echo "Enter number C"
	read C
	echo "Do you want to use option 1  or option 2. If Op1 press 1 , Op2 press 2"
	read OPTION
	#Using conditional statement to check which option user want
	if (( $OPTION == 1 ));
	then
			echo "How many terms do you want to print "
			read AMOUNT
			let N=1
			let Total=0
			while [ $AMOUNT -ge $N ]
			do
					let Term=$A*$N**2+$B*$N+$C 
					echo "The result is equal to $Term"
					Total=$((Total + $Term))
					N=$((N + 1))
			done
			echo "The Sum of the total is equal to $Total"
	elif (( $OPTION == 2 ));
	then
			echo "Which term position do you want to check"
			read POSITION
			let N=1
			let NEWVALUE
			while [ $POSITION -ge $N ]
			do
					let Term=$A*$N**2+$B*$N+$C 
					N=$((N + 1))
			done 

			let NEWVALUE=$Term%3
			if (( $NEWVALUE == 0 ));
			then 
				echo "$Term is a mutiple of 3"
			else
				echo "$Term is not a mutiple of 3"
			fi
	fi

#Checking for option ending system
elif [[ $option == "E" ]] || [[ $option == "e" ]] || [[ $option -eq 4 ]]; 
then
	echo "End system"
else
	echo "Option fail"
fi


echo "hello"

