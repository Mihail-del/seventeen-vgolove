import time
import io

file = io.open("text.txt", mode="r", encoding="utf-8")
lines = file.readlines()
count = len(lines)
print(count)

list_file = []
for x in range(count):
    line = lines[x]
    line = line[: -1]
    line_add = str(line)
    list_file.append(line_add)
    print(str(x) + "/" + str(count))
    print(str(line))
    time.sleep(0.01)

file = open('timecodes.txt','r')
lines = file.readlines()
count = len(lines)
print(count)

list_file_codes = []
for x in range(count):
    line = lines[x]
    line = list(line)
    try:
        int(line[-1])
        line_add = str(line[-19]) + str(line[-18])
        line_add = int(line_add) + (60*int(line[-21]))
        list_file_codes.append(line_add)
    except:
        line_add = str(line[-20]) + str(line[-19])
        line_add = int(line_add) + (60*int(line[-22]))
        list_file_codes.append(line_add)
    print(str(x) + "/" + str(count) + " (" + str(line_add) + ")")
    time.sleep(0.01)
list_file_codes.append(10000)

if len(list_file_codes) == len(list_file):
    final_list = []
    for x in range(count):
        line_in_final = "{ start: " + str(list_file_codes[x]) +", end: " + str(list_file_codes[x+1]) + ", text: '" + list_file[x] + "'},"
        final_list.append(line_in_final)
    print(final_list)

    with open('final.txt', 'w') as f:
        for line in final_list:
            f.write(f"{line}\n")
    print("Done")
    time.sleep(2)
else:
    print("Different number lines")
    print(len(list_file_codes), len(list_file))
    time.sleep(10)


